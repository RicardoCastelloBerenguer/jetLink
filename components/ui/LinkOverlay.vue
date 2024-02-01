<template>
  <main
    class="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white"
  >
    <section
      class="relative bg-[#313232] lg:max-w-[650px] h-[260px] py-4 px-1 sm:px-4 rounded-lg"
    >
      <section class="flex items-center justify-between w-full h-full">
        <div
          class="h-full items-center justify-center border-r-2 border-white pl-3 pr-6 md:pl-6 md:pr-8 hidden sm:flex"
        >
          <button
            @click="$emit('update-linkDetails-value')"
            class="px-1 scroll-py-0.5 rounded-full bg-[#5d6060] hover:bg-[#646666] absolute top-4 left-5"
          >
            <Icon name="mdi:close" size="19" color="" class="" />
          </button>
          <Icon name="ph:link-bold" size="70" color="#fd9f3f" class="" />
        </div>
        <div class="h-full py-2 flex flex-col justify-between w-full px-6">
          <button
            @click="$emit('update-linkDetails-value')"
            class="px-1 scroll-py-0.5 rounded-full bg-[#5d6060] hover:bg-[#646666] absolute top-4 right-5 sm:hidden"
          >
            <Icon name="mdi:close" size="19" color="" class="" />
          </button>
          <div class="">
            <span class="font-semibold text-xs rounded border-2 p-2">
              <Icon name="bi:file-zip" size="20" color="#fd9f3f" class="" />
              {{ shortUrl }}</span
            >
          </div>
          <div class="">
            <span
              class="font-semibold text-xs rounded border-2 p-2 text-ellipsis overflow-hidden"
            >
              <Icon
                name="ic:sharp-receipt-long"
                size="20"
                color="#fd9f3f"
                class=""
              />
              {{ origUrl.substring(0, 35) }}...</span
            >
          </div>
          <div v-if="$userStore.logged" class="">
            <span
              class="font-semibold text-xs sm:text-base rounded border-2 p-2"
            >
              <Icon name="ph:user" size="20" color="#fd9f3f" class="" />
              {{ $userStore.email }}</span
            >
          </div>
          <div
            v-if="props.clicks != undefined"
            class="flex items-center justify-start gap-5"
          >
            <span
              class="font-semibold text-xs sm:text-base rounded border-2 p-2"
            >
              <Icon name="tabler:click" size="20" color="#fd9f3f" class="" />
              {{ clicks }}</span
            >
          </div>
        </div>
      </section>

      <!-- <section class="flex flex-col gap-5 items-center justify-center h-full">
        <div class="flex items-center justify-between w-full">
          <h1 class="text-lg sm:text-xl font-bold basis-0 grow text-center">
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
            <span class="font-semibold text-xs">{{ origUrl }}</span>
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
          <div
            v-if="props.clicks"
            class="flex items-center justify-start gap-5"
          >
            <Icon name="tabler:click" size="20" color="#fd9f3f" class="" />
            <span class="font-semibold text-xs sm:text-base">{{ clicks }}</span>
          </div>
        </section> 
      </section>-->
    </section>
  </main>
</template>
<script setup>
const props = defineProps(["shortUrl", "origUrl", "clicks"]);
const { $userStore, $generalStore } = useNuxtApp();

const emits = defineEmits(["update-linkDetails-value"]);

// const { urlSelected } = toRefs(props);
</script>
