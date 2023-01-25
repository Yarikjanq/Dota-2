<template>
    <div>
        <div v-for="agi in searched" :key="agi">
            <div v-if="agi.primary_attr == 'agi'">
        {{ agi.primary_attr }}
            </div>
        </div>
    </div>
</template>



<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import { httpService } from "../../../api/request";

const agis = ref([])
const searchQuery = ref('')
const getAgi = async () => {
  agis.value = await httpService().getAgi();
  console.log(agis.value);
};
getAgi();
const searched = computed(() => {
  return agis.value.filter((agi) => {
    return (
      agi.primary_attr
        .toLowerCase()
        .indexOf(searchQuery.value.toLowerCase()) != -1
    );
    
  });
});

</script>