<template>
    <div>
        <select class="bg-slate-700 h-[30px]" :v-model="modelValue" @change="changeOption">
            <option disabled class="text-black">Groupe by</option>
            <option class="" v-for="option in options" :key="option.value" :value="option.value"> {{ option.name }} </option>
        </select>


    </div>
</template>
<script lang="ts">
export default{
    props:{
    modelValue:{
        type: String
    },
    options:{
        type:Array,
        default: () => []
    }
},
methods:{
    changeOption(event){
        this.$emit('update:modelValue', event.target.value)
     
        
    }
}
}
</script>