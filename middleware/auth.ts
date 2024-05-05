import { useAuthStore } from '~/stores/auth-store'
import {jwtVerify} from "jose";
export default defineNuxtRouteMiddleware(async () => {

    if(process.server){
        console.log('Server side')
        const authStore = useAuthStore()
        const mySecret = 'mySecret'
        // TODO: Use Secret from env
        const decoded = await jwtVerify(authStore.token || '', new TextEncoder().encode('MySecretKey'));
        console.log(decoded)
        if (authStore.token === '') {
            return navigateTo('/login')
        }
    }
    if(process.client){
        console.log('Client side')
    }

})