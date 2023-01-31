<template>
    <div>
        <button @click="increment">{{ count }}</button>
    </div>
</template>
<script lang="ts">
export default{
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    }
  }
  
}

</script>
