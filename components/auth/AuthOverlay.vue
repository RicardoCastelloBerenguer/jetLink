<template>
  <main
    v-if="isAuthOpen"
    class="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50"
  >
    <section
      class="relative bg-[#313232] w-full max-w-[470px] h-[70%] p-4 rounded-lg"
    >
      <header class="w-full flex justify-end">
        <button
          @click="
            () => {
              isAuthOpen = false;
              isRegister = false;
            }
          "
          class="p-1.5 rounded-full bg-[#5d6060] hover:bg-[#646666]"
        >
          <Icon name="mdi:close" size="26" color="" class="" />
        </button>
      </header>
      <Register
        v-if="isRegister"
        @change-to-login="
          () => {
            console.log(isRegister);
            isRegister = false;
          }
        "
      />
      <Login v-else />
      <footer
        class="absolute flex items-center justify-center py-5 left-0 bottom-0 border-t w-full gap-2"
      >
        <span class="text-[14px] mr-2">
          {{
            isRegister
              ? "You already have an account?"
              : "You don't have an account?"
          }}
        </span>
        <button
          @click="isRegister = !isRegister"
          class="text-[14px] rounded px-2 py-1 font-semibold hover:underline bg-white text-gray-700"
        >
          <span class="text-center" v-if="!isRegister">Sign up</span>
          <span v-else>Log in</span>
        </button>
      </footer>
    </section>
  </main>
</template>
<script setup>
import Register from "~/components/auth/Register.vue";
import Login from "~/components/auth/Login.vue";

const { $generalStore } = useNuxtApp();

const { isAuthOpen } = storeToRefs($generalStore);

let isRegister = ref(false);
</script>
