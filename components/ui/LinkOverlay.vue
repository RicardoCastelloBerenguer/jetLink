<template>
  <main
    class="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white"
  >
    <section
      class="relative bg-[#313232] w-full max-w-[470px] lg:max-w-[650px] sm:h-[35%] sm:max-h-[260px] p-4 rounded-lg"
    >
      <section class="flex flex-col gap-5 items-center justify-center h-full">
        <div class="flex items-center justify-between w-full">
          <h1 class="text-xl font-bold basis-0 grow text-center">
            Link Details
          </h1>
          <button
            @click="$emit('update-linkDetails-value')"
            class="px-1 scroll-py-0.5 rounded-full bg-[#5d6060] hover:bg-[#646666]"
          >
            <Icon name="mdi:close" size="19" color="" class="" />
          </button>
        </div>

        <section
          class="w-full h-full flex flex-col justify-center gap-5 pl-4 pb-10"
        >
          <div class="flex items-center justify-start gap-5">
            <Icon name="tdesign:pin" size="20" color="#fd9f3f" class="" />
            <span class="font-semibold text-xs sm:text-base">{{
              shortUrl
            }}</span>
          </div>
          <div class="flex items-center justify-start gap-5">
            <Icon name="ph:link-bold" size="20" color="#fd9f3f" class="" />
            <span class="font-semibold text-xs sm:text-base">{{
              origUrl
            }}</span>
          </div>
          <div
            v-if="$userStore.logged"
            class="flex items-center justify-start gap-5"
          >
            <Icon name="ph:user" size="20" color="#fd9f3f" class="" />
            <span class="font-semibold text-xs sm:text-base">{{
              $userStore.email
            }}</span>
          </div>
          <div v-if="clicks" class="flex items-center justify-start gap-5">
            <Icon name="tabler:click" size="20" color="#fd9f3f" class="" />
            <span class="font-semibold text-xs sm:text-base">{{ clicks }}</span>
          </div>
        </section>
      </section>
    </section>
  </main>
</template>
<script setup>
const props = defineProps(["shortUrl", "origUrl", "clicks"]);
const { $userStore, $generalStore } = useNuxtApp();

const emits = defineEmits(["update-linkDetails-value"]);

// const { urlSelected } = toRefs(props);
</script>
