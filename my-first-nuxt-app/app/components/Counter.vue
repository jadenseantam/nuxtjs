<script setup lang="js">
let count = ref(0)
</script>

<template>
  <div>
    <button @click="count++">Count: {{ count }}</button>
  </div>
</template>

<style scoped>
button {
  background-color: red;
  width: 100px;
  height: 50px;
  border-radius: 50px;
  color: blue;
  border: none;
}
</style>
