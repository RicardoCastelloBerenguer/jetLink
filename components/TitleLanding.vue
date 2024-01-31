<template>
  <header class="flex flex-col items-center justify-center">
    <h1
      class="text-2xl md:text-6xl sm:text-4xl font-bold mb-6"
      :class="title.length < 15 ? 'text-4xl' : ''"
    >
      {{ title ?? "JetLink [ Link Shortener ]" }}
    </h1>
    <h2
      class="text-lg md:text-3xl font-light text-gray-500 mb-10"
      :class="subtitle.length > 15 ? 'text-sm' : ''"
    >
      {{ subtitle ?? "Unlimited links without pricing" }}
    </h2>
    <div
      class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-10 text-sm"
    >
      <button
        @click="$generalStore.modalGuideOpen = true"
        class="hover:opacity-80 animate-bounce-slow"
      >
        <Icon name="ic:baseline-not-started" size="20" color="" class="mb-1" />
        Getting Started
      </button>

      <a
        href="https://github.com/RicardoCastelloBerenguer/jetLink"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:opacity-80"
        ><Icon
          name="solar:star-bold-duotone"
          size="20"
          color="yellow"
          class="mb-1"
        />
        Give a Star on GitHub!</a
      >
    </div>
  </header>
</template>
<script setup>
const { $generalStore } = useNuxtApp();

const props = defineProps({
  title: {
    type: String,
    default: "JetLink [ Link Shortener ]",
  },
  subtitle: {
    type: String,
    default: "Unlimited links without pricing",
  },
});
</script>
<style lang="scss" scoped></style>
