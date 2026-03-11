<script setup lang="ts">
const { data: todo } = await useFetch('https://jsonplaceholder.typicode.com/todos/1')
</script>

<template>
  <div>
    {{ todo }}
  </div>
</template>

<style scoped></style>
