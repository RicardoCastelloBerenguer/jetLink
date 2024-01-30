<template>
  <main
    class="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white"
  >
    <section
      class="relative bg-[#313232] w-full max-w-[470px] h-[35%] sm:max-h-[260px] p-4 rounded-lg"
    >
      <section class="flex flex-col gap-5 items-center justify-center">
        <div class="flex items-center justify-between w-full">
          <h1 class="text-xl font-bold basis-0 grow text-center">
            Link Details
          </h1>
          <button
            @click="$emit('update-linkDetails-value')"
            class="px-1 py-0.5 rounded-full bg-[#5d6060]"
          >
            <Icon name="mdi:close" size="19" color="" class="" />
          </button>
        </div>

        <section class="w-full flex flex-col gap-5 pl-5">
          <div class="flex items-center justify-start gap-5">
            <Icon name="tdesign:pin" size="20" color="" class="" />
            <span class="font-semibold text-xs sm:text-base">{{
              shortUrl
            }}</span>
          </div>
          <div class="flex items-center justify-start gap-5">
            <Icon name="ph:link-bold" size="20" color="" class="" />
            <span class="font-semibold text-xs sm:text-base">{{
              origUrl
            }}</span>
          </div>
          <div class="flex items-center justify-start gap-5">
            <Icon name="ph:user" size="20" color="" class="" />
            <span class="font-semibold text-xs sm:text-base">{{
              $userStore.email
            }}</span>
          </div>
          <div class="flex items-center justify-start gap-5">
            <Icon name="tabler:click" size="20" color="" class="" />
            <span class="font-semibold text-xs sm:text-base">{{ clicks }}</span>
          </div>
        </section>
      </section>
    </section>
  </main>
</template>
<script setup>
const props = defineProps([
  "shortUrl",
  "origUrl",
  "clicks",
  "isLinkDetailsOpen",
]);
const { $userStore, $generalStore } = useNuxtApp();

const { isLinkDetailsOpen } = storeToRefs(props);

const emits = defineEmits(["update-linkDetails-value"]);

// const { urlSelected } = toRefs(props);
</script>
