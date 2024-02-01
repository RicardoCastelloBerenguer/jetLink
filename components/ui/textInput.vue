<template>
  <input
    :id="`input-${placeholder}`"
    :type="inputType"
    class="block w-full bg-[#5d6060] text-white border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none"
    :placeholder="placeholder"
    v-model="inputComputed"
    autocomplete="off"
    :maxlength="max"
    :minlength="minlength"
  />

  <span v-if="error" class="text-red-500 text-[14px] font-semibold">
    {{ error }}
  </span>
</template>
<script setup>
const emit = defineEmits(["update:input"]);

const props = defineProps([
  "input",
  "placeholder",
  "inputType",
  "max",
  "autoFocus",
  "error",
  "minlength",
]);

const { input, placeholder, inputType, max, error, minlength } = toRefs(props);

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit("update:input", val),
});
</script>
