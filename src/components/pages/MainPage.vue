<template>
    <div class="cool">
      <CompDia
        v-show="isShowModal"
        @close="toggleModal"
      />
      <button @click="toggleModal">
        Open Modal
      </button>
    </div>
  </template>
  
  <script lang="ts">
  import CompDia from '../UI/CompDia.vue';
  
  export default {
    components: {
        CompDia,
    },
    data: () => ({
      isShowModal: false,
    }),
    methods: {
      toggleModal() {
        this.isShowModal = !this.isShowModal;
      },
    },
  };
  </script>