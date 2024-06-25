<!--<script setup>


const username = ref('')
const password = ref('')

const { signIn,status } = useAuth()
async function signInWithCredentials() {
  // Probably you'll do some validation here before submitting to the backend
  // ...

  // This is the object that our backend expects for the `signIn` endpoint
  const credentials = {
    username: username.value,
    password: password.value
  }

  try {
    // This sends a POST request to the `auth.provider.endpoints.signIn` endpoint with `credentials` as the body
    await signIn(credentials,{
      callbackUrl: '/products/all',
      external: false,
    })
    alert('Successfully logged in!')
  } catch (error) {
    console.error(error)
  }
}

</script>

<template>
  <div>
    {{ status }}
    &lt;!&ndash;    <h1>Enter your credentials to continue</h1>
        <input v-model="username" type="email" />
        <input v-model="password" type="password" />
        <button class="h-9 w-8" @click="signInWithCredentials()" >Signin</button>&ndash;&gt;

    <form @submit.prevent="signIn({ username, password }, {external:false, redirect:false})">
      <input v-model="username" type="text" placeholder="Username" data-testid="username">
      <input v-model="password" type="password" placeholder="Password" data-testid="password">
      <button type="submit" data-testid="submit">
        sign in
      </button>
    </form>
  </div>
</template>-->


<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<script setup>


const username = ref('')
const password = ref('')

const { signIn,status } = useAuth()
async function signInWithCredentials() {
  // Probably you'll do some validation here before submitting to the backend
  // ...

  // This is the object that our backend expects for the `signIn` endpoint
  const credentials = {
    username: username.value,
    password: password.value
  }

  try {
    // This sends a POST request to the `auth.provider.endpoints.signIn` endpoint with `credentials` as the body
    await signIn(credentials,{
      callbackUrl: '/products/all',
      external: false,
    })
    alert('Successfully logged in!')
  } catch (error) {
    console.error(error)
  }
}

</script>
<template>

  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="signIn({ username, password }, {external:false, callbackUrl:'/'})" class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div class="mt-2">
            <input v-model="username" id="username" name="username" type="text" autocomplete="username" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>

        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up here!</a>
      </p>
    </div>
  </div>
</template>

