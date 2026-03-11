<script>
const {data} = await useFetch("/api/ninja")
</script>
<template>{{ data }}</template>