<template>
  <section class="absolute">
    <ModalCard
      v-if="currentModal == 1"
      @nextModal="nextModal()"
      @prevModal="prevModal()"
      textContent="Welcome to this brief guide designed to help you navigate and understand the functionalities of the website."
      :maxModals="5"
      :currentModal="currentModal"
      class=""
    />
    <ModalCard
      v-if="currentModal == 2"
      @nextModal="nextModal()"
      @prevModal="prevModal()"
      textContent="To get started, simply paste the desired link below, and a popup will display the shortened result link."
      :maxModals="5"
      :currentModal="currentModal"
      class="absolute"
    />

    <ModalCard
      v-if="currentModal == 3"
      @nextModal="nextModal()"
      @prevModal="prevModal()"
      textContent="For a comprehensive list of all the links you create, we recommend registering before generating any links. This way, you can enter your profile and easily manage and organize all your links."
      :maxModals="5"
      :currentModal="currentModal"
      class="absolute"
    />

    <ModalCard
      v-if="currentModal == 4"
      @nextModal="nextModal()"
      @prevModal="prevModal()"
      textContent="Enjoy the ability to edit, remove, and review detailed information about your created links, including analytics on user clicks."
      :maxModals="5"
      :currentModal="currentModal"
      class="absolute"
    />

    <ModalCard
      v-if="currentModal == 5"
      @nextModal="nextModal()"
      @prevModal="prevModal()"
      textContent="That's it! If you find this website helpful, don't forget to give us a star on GitHub. Thank you and have a wonderful day!"
      :maxModals="5"
      :currentModal="currentModal"
      class="absolute"
    />
  </section>
</template>

<script setup>
import ModalCard from "./ModalCard.vue";

const currentModal = ref(1);

const nextModal = () => {
  if (currentModal.value < 5) currentModal.value++;
  else currentModal.value = 1;
};
const prevModal = () => {
  if (currentModal.value > 1) currentModal.value--;
};
</script>
<style lang="scss" scoped></style>
