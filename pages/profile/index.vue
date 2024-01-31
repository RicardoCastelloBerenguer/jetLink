<template>
  <header class="pt-32 flex flex-col items-center justify-center mb-10">
    <h1 class="font-bold text-4xl text-center pb-2 hover:cursor-default">
      Linkboard
    </h1>
  </header>
  <main
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
  >
    <CardLink
      v-for="url in $urlStore.urlsUserLogged"
      :urlId="url.id"
      :shortUrl="url.shortUrl"
      :originalUrl="url.origUrl"
      :clicks="url.clicks"
    />
  </main>
</template>
<script setup>
import CardLink from "~/components/ui/CardLink.vue";

const { $urlStore } = useNuxtApp();

const urls = ref(null);

definePageMeta({ middleware: "auth" });

onMounted(async () => {
  await $urlStore.getUrlsByUserLogged();
});
</script>
