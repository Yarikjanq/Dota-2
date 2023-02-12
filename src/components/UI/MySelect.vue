<template>
  <div>
    <select
      class="bg-slate-700 p-[10px] w-[120px]"
      :v-model="modelValue"
      @change="changeOption"
    >
      <option disabled class="text-black"><strong>Groupe by</strong></option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>
<script lang="ts" setup>
import { defineEmits } from "vue";
defineProps<{
  modelValue?: Array;
  options?: Array;
}>();

const emit = defineEmits(["update:modelValue"]);
const changeOption = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
