<script setup lang="ts">
import {definePageMeta} from "#imports";


const authStore = useAuthStore()

</script>

<template>
<div>
    <h1>Dashboard</h1>
  <p>
    {{authStore.token}}
  </p>
</div>
</template>

<style scoped>

</style>