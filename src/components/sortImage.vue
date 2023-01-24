<template>
  <div>
    <div class="mx-auto flex justify-around h-[100px] items-center">
      <select
   
        v-model="sortBy"
        type="search"
        class="cool1 w-[10%]"
        v-for="agi in agis" :key="agi"
      >
        <option  :value="agi.primary_attr"> {{ agi.primary_attr }} </option>
      
        <!-- <option>{{ n.primary_attr }}</option>
        <option>{{ n.primary_attr }}</option> -->
        <!-- <div v-if="post.primary_attr.value == 'agi'"> -->
      </select>
     
    </div>
    <div class="text-center">
    {{ sortBy }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import { httpService } from "../../api/request";
const agis = ref([]);
const result = ref([]);
const sortBy = ref('')
console.log(sortBy.value);

const getAgi = async () => {
  agis.value = await httpService().getAgi();
  console.log(agis.value);
};
getAgi();
const selectqw = ref(null);
const changeLang = (event) => {
  console.log("Called>>>>", event.target.value);
};
</script>

<style scoped>
.cool1 {
  background-color: rgba(19, 111, 149, 0.37);
}
</style>
