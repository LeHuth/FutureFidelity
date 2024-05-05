// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  //@ts-ignore
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
      htttOnly: true,
    },
    storage: 'cookies',
  },
})
