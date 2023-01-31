<template>
  <div>
    <select
      class="bg-slate-700 h-[30px]"
      :v-model="modelValue"
      @change="changeOption"
    >
      <option disabled class=""> <strong>Groupe by</strong></option>
      <option
        class=""
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
import { defineEmits } from 'vue';
defineProps<{
    modelValue?: Array,
    options?: Array,
   
}>()

const emit = defineEmits(["update:modelValue"]);
   const changeOption =(event) => {
      emit("update:modelValue", event.target.value);
    
  
};
</script>
