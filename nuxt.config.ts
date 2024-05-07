// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-headlessui',
    "@nuxtjs/tailwindcss"
  ],
  //@ts-ignore
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
      httpOnly: true,
    },
    storage: 'cookies',
  },
  css: ['~/assets/css/main.css'],
})