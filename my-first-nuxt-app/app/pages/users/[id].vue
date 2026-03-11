<script setup lang="ts">
const route = useRoute()

const id = route.params.id
</script>

<template>
  <div>
    Id is {{ id }}
  </div>
</template>

<style scoped></style>
