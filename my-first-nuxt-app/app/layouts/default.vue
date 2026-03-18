<script setup lang="ts"></script>

<template>
  <div>
    <nav>
      <NuxtLink class="navbar" to="/">Home</NuxtLink>
      <NuxtLink class="navbar" to="/users">Users</NuxtLink>
      <NuxtLink class="navbar" to="/fetch">Fetch</NuxtLink>
      <NuxtLink class="navbar" to="/api-fetch">API-fetch</NuxtLink>
    </nav>
    <slot />
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  padding: 10px;
}
.navbar {
  padding: 5px;
}
</style>
