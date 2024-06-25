// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        'nuxt-headlessui',
        "@nuxtjs/tailwindcss",
        '@sidebase/nuxt-auth',
        "@nuxt/image",
        '@nuxtjs/color-mode'
    ],
    colorMode: {
        preference: 'light', // default theme
        dataValue: 'theme', // activate data-theme in <html> tag
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
    },

    auth: {
        globalAppMiddleware: true,
        baseURL: '/api/auth',
        provider:{
            type:'refresh',
            endpoints:{
                signIn: {path:'/login/', method: 'post'},
                signOut: false,
                refresh: {path: '/refresh/', method:'post'},
                getSession: {path: '/me/'}
            },
            pages:{
                login: '/login'
            },
            token: {
                maxAgeInSeconds: 60 * 5,    // token expiration 1d
                signInResponseTokenPointer: '/token/accessToken',
            },
            refreshToken:{
                maxAgeInSeconds: 60 * 60 * 24 * 7,    // token expiration 1d
                signInResponseRefreshTokenPointer: '/token/refreshToken',
                refreshRequestTokenPointer: '/refreshToken'
            }
        },
        session: {
            enableRefreshPeriodically: 1000 * 60 * 60,   // Refetch user session data every 1h
            enableRefreshOnWindowFocus: true,     // Refetch user session every time when browser tab will be focused
        }

    },
    routeRules: {
        '/with-caching': {
            swr: 86400000,
            auth: {
                disableServerSideAuth: true
            }
        }
    },


    //@ts-ignore
/*    piniaPersistedstate: {
        cookieOptions: {
            sameSite: 'strict',
            httpOnly: true,
        },
        storage: 'cookies',
    },*/
    css: ['~/assets/css/main.css'],

    tailwindcss: {
        configPath: '~/tailwind.config.js',
    }
})