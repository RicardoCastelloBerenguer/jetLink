<template>
  <section class="">
    <span class="text-center text-[28px] mb-4 font-bold block">Login</span>

    <div class="px-6 pb-2 text-[15px] flex flex-col gap-10 pt-5">
      <text-input
        placeholder="Email"
        input-type="text"
        :auto-focus="true"
        :error="errors && errors.email ? errors.email[0] : ''"
        v-model:input="email"
      />
      <text-input
        placeholder="Password"
        input-type="password"
        error=""
        v-model:input="password"
      />

      <div class="px-6 pb-2 mt-6">
        <button
          :disabled="!email || !password"
          class="w-full text-[17px] font-semibold text-white py-3 rounded"
          :class="!email || !password ? 'bg-[#5d6060]' : 'bg-[#f02c56]'"
          @click="login()"
        >
          <span v-if="loadedLogin">Login</span>
          <Icon
            v-else
            name="mingcute:loading-line"
            size="30"
            color="#FFFFFF"
            class="animate-spin ml-1 w-full"
          />
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import textInput from "~/components/ui/textInput.vue";

const { $userStore } = useNuxtApp();

let email = ref("");
let password = ref("");
let errors = ref(null);
let loadedLogin = ref(true);

const login = async () => {
  try {
    loadedLogin.value = false;
    const user = {
      email: email.value,
      password: password.value,
    };
    let data = await $userStore.login(user);
    email.value = "";
    password.value = "";
    loadedLogin.value = true;
  } catch (error) {
    loadedLogin.value = true;
  }
};
</script>
<style lang="scss" scoped></style>
