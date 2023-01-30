<template>
    <div class="">
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog1">
        <slot></slot>

    </div>
  </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>
<style scoped>
.dialog {
 background: none;

  position: fixed;
  display: flex;
top: 0;
bottom: 0;
right: 0;
left: 0;
}
.dialog1 {
  margin: auto;
  background: black;
  min-height: 50px;
  min-width: 300px;
}
</style>
