<template>
  <header
    class="flex items-center justify-between px-6 py-5 fixed top-0 w-full z-40"
  >
    <nav>
      <ul class="flex justify-center items-center">
        <li class="flex justify-center items-center gap-3">
          <a class="text-lg hover:opacity-80" href="/"
            ><Icon name="tabler:jetpack" size="30" color="" class="" />
            JetLink</a
          >
        </li>
      </ul>
    </nav>
    <nav>
      <ul class="flex items-center justify-center gap-10">
        <li v-if="!userLoading || $userStore.id">
          <button
            v-if="!$userStore.id"
            @click="isAuthOpen = true"
            class="hover:opacity-80"
          >
            Sign in
          </button>
          <div v-else class="flex items-center justify-center gap-10">
            <NuxtLink
              to="/profile"
              class="hover:opacity-80 font-semibold relative"
            >
              {{ $userStore.email }}
              <Icon
                name="octicon:dot-fill-16"
                size="10"
                color="white"
                class="animate-ping absolute top-0 -right-3"
              />
            </NuxtLink>

            <button
              @click="logout()"
              class="font-semibold border rounded py-0.5 px-1.5 hover:border-white hover:text-black hover:bg-white transition-all duration-100"
            >
              Sign out
            </button>
          </div>
        </li>
        <li v-else>
          <Icon
            name="ant-design:loading-outlined"
            size="20"
            color=""
            class="animate-spin"
          />
        </li>
        <li>
          <a
            href="https://github.com/RicardoCastelloBerenguer/jetLink"
            target="_blank"
            ><Icon
              name="ri:github-fill"
              size="30"
              color=""
              class="hover:opacity-80"
          /></a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
const { $generalStore, $userStore } = useNuxtApp();

const { isAuthOpen } = storeToRefs($generalStore);
const { id, email } = storeToRefs($userStore);

let userLoading = ref(true);

const logout = () => {
  userLoading.value = true;
  $userStore.logout();
  userLoading.value = false;
};

onMounted(async () => {
  userLoading.value = true;
  await $userStore.getUser();
  userLoading.value = false;
});
</script>
<style lang="scss" scoped></style>
