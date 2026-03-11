<template>
  <nav>
    <NuxtLink class="navbar" to="/">Home</NuxtLink>
    <NuxtLink class="navbar" to="/about">About</NuxtLink>
    <NuxtLink class="navbar" to="/docs">Docs</NuxtLink>
    <NuxtLink class="navbar" to="/users">Users</NuxtLink>
  </nav>
  <main>
    <NuxtPage />
  </main>
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