<script setup lang="ts">
 const authStore = useAuthStore()

</script>

<template>
<main>
  <Login/>
  <button @click="authStore.logout()">Logout</button>
</main>
</template>

<style scoped>

</style>