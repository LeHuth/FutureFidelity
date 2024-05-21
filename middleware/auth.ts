import { useAuthStore } from '~/stores/auth-store'
import {jwtVerify} from "jose";
export default defineNuxtRouteMiddleware(async () => {
    const authStore = useAuthStore()
    if(authStore.token === ''){
        return navigateTo('/login')
    }
    const res = await $fetch('/api/verify', {
        method: 'post',
        body: JSON.stringify({token: authStore.token}),
    })

    if(!res){
        return navigateTo('/login')
    }

    /*if(process.server){
        console.log('Server side')

        const mySecret = 'mySecret'
        // TODO: Use Secret from env
        try{
            const decoded = await jwtVerify(authStore.token || '', new TextEncoder().encode('MySecretKey'));
        } catch (e) {
            console.error(e)
            return navigateTo('/login')
        }

        if (authStore.token === '') {
            return navigateTo('/login')
        }
    }
    if(process.client){
        console.log('Client side')
        const res=await $fetch('/api/token',{
            method: 'post',
            body: JSON.stringify({token: authStore.token}),
        })

        console.log(res)
        /!*fetch('http://localhost:8000/api/auth/token/verify/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({token: authStore.token}),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Unauthorized')
            })
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.error(error)
                navigateTo('/login')
        })*!/
    }*/

})