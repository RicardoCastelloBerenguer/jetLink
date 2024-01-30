<template>
  <main
    class="bg-white rounded flex flex-col gap-2 items-center justify-center text-black p-4 relative"
  >
    <header class="flex items-center justify-between w-full">
      <div class="flex items justify-center gap-2">
        <a
          ref="shortLink"
          :href="`http://${shortUrl}`"
          target="_blank"
          class="font-semibold hover:underline text-[#f19539]"
          >{{ shortUrl }}</a
        >
        <Icon
          @click="copyToClipboard()"
          name="bi:copy"
          size="15"
          color=""
          class="hover:cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-100"
        />
      </div>

      <div class="flex items-center justify-center gap-2">
        <button
          @click="isLinkDetailsOpen = true"
          class="bg-[#fd9f3f] rounded-full px-1 hover:px-2 transition-all"
        >
          <Icon name="la:info" size="15" color="white" class="" />
        </button>
        <button
          @click="deleteUrl()"
          class="bg-[#fd9f3f] rounded px-1 hover:px-2 transition-all"
        >
          <Icon name="iconamoon:trash-bold" size="15" color="white" class="" />
        </button>
      </div>
    </header>

    <LinkOverlay
      :shortUrl="shortUrl"
      :origUrl="originalUrl"
      :clicks="clicks"
      :isLinkDetailsOpen="isLinkDetailsOpen"
      @update-linkDetails-value="() => (isLinkDetailsOpen = false)"
      v-if="isLinkDetailsOpen"
    />
  </main>
</template>
<script setup>
import LinkOverlay from "~/components/ui/LinkOverlay.vue";

const { $generalStore, $urlStore } = useNuxtApp();

const isLinkDetailsOpen = ref(false);

const props = defineProps(["urlId", "shortUrl", "originalUrl", "clicks"]);

const { urlId, shortUrl, originalUrl, clicks } = toRefs(props);

const copyToClipboard = () => {
  // Crea un elemento de texto temporal
  const tempElement = document.createElement("textarea");
  tempElement.value = shortUrl.value;

  // Añade el elemento temporal al DOM
  document.body.appendChild(tempElement);

  // Selecciona y copia el texto
  tempElement.select();
  document.execCommand("copy");

  // Elimina el elemento temporal
  document.body.removeChild(tempElement);

  console.log("Enlace copiado al portapapeles:", tempElement.value);
};

const deleteUrl = () => {
  $urlStore.deleteUrl(urlId.value);
};
</script>
<style lang="scss" scoped></style>
