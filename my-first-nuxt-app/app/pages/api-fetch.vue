<script setup>
const {data} = await useFetch("/api/ninja?name=mario")
</script>
<template>{{ data }}</template>