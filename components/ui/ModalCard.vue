<template>
  <section
    class="text-black flex flex-col items-center justify-center relative gap-5 py-2 px-3 rounded bg-white min-w-[50px] min-h-[50px] max-w-[500px]"
  >
    <h1 class="font-bold text-center text-sm sm:text-xl">
      {{ titleContent ? titleContent : "Welcome to JetLink!" }}
    </h1>
    <p class="text-xs sm:text-base">
      {{ textContent }}
    </p>
    <div class="flex items-center justify-between w-full">
      <div class="grow basis-0 w-full">
        <button
          @click="$emit('prevModal')"
          class="px-2 py-0.5 hover:bg-blue-300 hover:text-white border-2 rounded border-blue-300 transition-all flex gap-1 items-center text-xs sm:text-base"
        >
          <Icon name="raphael:arrowleft" size="" color="" class="" />
          Prev
        </button>
      </div>
      <div class="flex items-center justify-center">
        <Icon
          v-for="index in maxModals"
          :key="index"
          :name="currentModal == index ? 'ph:dot-fill' : 'ph:dot-duotone'"
          size=""
          color=""
          class=""
        />
      </div>
      <div class="grow basis-0 w-full flex justify-end">
        <button
          v-if="currentModal != 5"
          @click="$emit('nextModal')"
          class="px-2 py-0.5 hover:bg-blue-300 hover:text-white border-2 rounded border-blue-300 transition-all flex items-center gap-1 text-xs sm:text-base"
        >
          Next
          <Icon name="raphael:arrowright" size="" color="" class="" />
        </button>
        <button
          v-else
          @click="$generalStore.modalGuideOpen = false"
          class="px-2 py-0.5 hover:bg-green-300 hover:text-white border-2 rounded border-green-300 transition-all flex items-center gap-1"
        >
          Ok
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps([
  "titleContent",
  "currentModal",
  "maxModals",
  "modalId",
  "textContent",
]);

const { $userStore, $generalStore } = useNuxtApp();

const { generalStore } = useNuxtApp();

const emits = defineEmits(["nextModal", "prevModal"]);
</script>
<style lang="scss" scoped></style>
