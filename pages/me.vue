<script setup lang="ts">

import type { meInterface } from '~/types';

const { getSession } = useAuth();
const session = ref<meInterface | null>(null);

onMounted(async () => {
  session.value = await getSession();
});
</script>

<template>
  <div class="flex" v-if="session">
    <div>
      <NuxtImg
        :src="'http://localhost:8000'+session.photo"
        alt="random image"
        width="800"
        height="600"/>
    </div>
    <p>Username: {{ session.username }}</p>
    <p>First name: {{ session.first_name }}</p>
    <p>Last name: {{ session.last_name }}</p>
    <p>Email: {{ session.email }}</p>
    <p>Street: {{ session.street }}</p>
    <p>City: {{ session.city }}</p>
    <p>State: {{ session.state }}</p>
    <p>Postal Code: {{ session.postal_code }}</p>
    <p>Country: {{ session.country }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>