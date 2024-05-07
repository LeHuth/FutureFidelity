<script setup lang="ts">
import {useAuthStore} from "~/stores/auth-store";

const authStore = useAuthStore()
const login = (e:MouseEvent) => {
  e.preventDefault()
  console.log('Login')

  fetch('http://localhost:8000/api/auth/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'admin',
      password: 'admin',
    })
  }).then(response => {
    response.json().then(data => {
      console.log(data)
      authStore.setToken(data.access)
      authStore.setRefreshToken(data.refresh)
    })
  }).catch(error => {
    console.error(error)
  })
}

</script>

<template>
  <div>
    <h1>Login</h1>
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button @click="login" type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>

</style>