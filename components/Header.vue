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
        <li>
          <button
            v-if="!$userStore.id"
            @click="isAuthOpen = true"
            class="hover:opacity-80"
          >
            Sign in
          </button>
          <div v-else class="flex items-center justify-center gap-10">
            <button
              @click="logout()"
              class="font-semibold border rounded py-0.5 px-1.5 border-red-600 text-red-600 hover:border-white hover:text-black hover:bg-white transition-all duration-100"
            >
              Sign out
            </button>
            <NuxtLink to="/profile" class="hover:opacity-80 font-semibold">
              {{ $userStore.email }}
            </NuxtLink>
          </div>
        </li>
        <li>
          <a href="#"
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

const logout = () => {
  $userStore.logout();
};
</script>
<style lang="scss" scoped></style>
