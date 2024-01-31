<template>
  <main class="pt-56 flex flex-col items-center justify-center">
    <div class="absolute">
      <LinkOverlay
        v-if="isLinkDetailsOpen && linkCreated"
        :shortUrl="linkCreated.shortUrl"
        :origUrl="linkCreated.origUrl"
        @update-linkDetails-value="changeVisibility()"
      />
    </div>

    <TitleLanding title="JetLink [ Link Shortener ]" />
    <section class="pt-32 w-full h-full">
      <header
        class="flex flex-col sm:flex-row items-center justify-between gap-5"
      >
        <input
          type="text"
          name=""
          v-model="originalUrl"
          placeholder="Insert here your link"
          id=""
          class="bg-white bg-opacity-5 rounded w-full placeholder-white placeholder-opacity-85 py-2 px-6 flex-grow basis-0"
        />
        <button
          type="submit"
          @click="sendOriginalUrl()"
          class="border sm:border-opacity-0 border-white px-3 py-1 rounded hover:border-opacity-100 transition-all duration-150"
        >
          <Icon
            v-if="!loadingUrl"
            name="system-uicons:plus"
            size="30"
            color=""
            class=""
          />
          <Icon
            v-else
            name="tdesign:load"
            size="20"
            color=""
            class="animate-spin mr-1"
          />
          Create New Link
        </button>
      </header>
    </section>
    <ModalGuideManager v-if="$generalStore.modalGuideOpen" />
  </main>
</template>
<script setup>
import ModalGuideManager from "~/components/ui/ModalGuideManager.vue";
import LinkOverlay from "~/components/ui/LinkOverlay.vue";

const { $urlStore, $userStore, $generalStore } = useNuxtApp();

let isLinkDetailsOpen = ref(false);
const originalUrl = ref("");
const loadingUrl = ref(false);
const showModalLink = ref(false);
const linkCreated = ref(null);

const sendOriginalUrl = async () => {
  try {
    let response = await $urlStore.postUrl(originalUrl, $userStore.id);
    linkCreated.value = response.data.data;
    originalUrl.value = "";
    isLinkDetailsOpen.value = true;
  } catch (error) {
    console.error("Error al enviar la URL:", error);

    // Manejar diferentes tipos de errores
    if (error.response && error.response.status === 400) {
      // Código de error 400 (Bad Request)
      console.error("La solicitud es incorrecta o la URL no es válida.");
    } else {
      // Otros errores
      console.error("Error desconocido al enviar la URL.");
    }
  }
};

const changeVisibility = () => {
  isLinkDetailsOpen.value = false;
};
</script>
