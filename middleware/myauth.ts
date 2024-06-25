import { useAuthStore } from '~/stores/auth-store'
import {jwtVerify} from "jose";
export default defineNuxtRouteMiddleware(async () => {
    console.log('########################## Middleware Auth ##########################')
    const authStore = useAuthStore()
    if(authStore.token === ''){
        return navigateTo('/login')
    }
    console.log('--------- Auth Store ---------')
    console.log('authStore.token', authStore.token)
    console.log('authStore.refreshToken', authStore.refreshToken)
    console.log('--------- end end ---------')


    const res = await $fetch('/api/verify', {
        method: 'post',
        body: JSON.stringify({token: authStore.token, refreshToken: authStore.refreshToken}),
    })
    console.log('myauth.ts - RESULT: ',res)
    if(!res.ok){
        return navigateTo('/login')
    }

    if(res.ok){
        console.log(res.access, res.refresh)
        authStore.setToken(res.access)
        authStore.setRefreshToken(res.refresh)
    }
    console.log('########################## END END ##########################')

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