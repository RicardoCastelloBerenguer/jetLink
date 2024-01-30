<template>
  <main class="pt-56 flex flex-col items-center justify-center">
    <TitleLanding title="JetLink [ Link Shortener ]" />
    <section class="pt-32 w-full h-full">
      <header
        class="flex flex-col sm:flex-row items-center justify-between gap-5"
      >
        <input
          type="text"
          name=""
          v-model="originalUrl"
          placeholder="Search Link"
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
  </main>
</template>
<script setup>
const { $urlStore, $userStore } = useNuxtApp();

const originalUrl = ref("");
const loadingUrl = ref(false);

const sendOriginalUrl = async () => {
  try {
    await $urlStore.postUrl(originalUrl, $userStore.id);
    originalUrl.value = "";
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
</script>
