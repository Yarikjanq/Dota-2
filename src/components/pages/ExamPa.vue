<template>
    <div>
    <h1>{{ $store.state.like }}</h1>
        <button class="mr-[100px]" @click="$store.commit('insrease')">+</button>
        <button @click="$store.commit('decrease')">-</button>
    </div>
</template>
<script lang="ts">


</script>
