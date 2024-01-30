<template>
  <Header />
  <main
    v-if="(error.statusCode = 404)"
    class="flex flex-col items-center justify-center pt-56"
  >
    <TitleLanding
      title="Error [404]"
      subtitle="The website you are trying to go does not exist"
    />
  </main>

  <Footer></Footer>
</template>
<script setup>
const error = useError();

definePageMeta({
  layout: "default",
});
</script>
<style scoped>
body {
}
</style>
