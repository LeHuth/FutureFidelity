/*
import {jwtVerify} from "jose";
import {verifyInterface} from "~/types";

const tryToDecode = async (token: string) => {
    try {
        const decoded = await jwtVerify(token || '', new TextEncoder().encode('MySecretKey'));
        return true
    } catch (e: any) {
        console.log('token not valid')
        return false
    }
}

const fetchRefreshToken = async (refreshToken: string) => {
    return await fetch('http://localhost:8000/api/auth/token/refresh/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({refresh: refreshToken}),
    })

}


export default defineEventHandler(async (ctx):Promise<verifyInterface> => {
    const body = await readBody(ctx)
    //console.log('Token:', body.token)
    console.log('this is server side code')

    const result = await tryToDecode(body.token)
    console.log('verify.ts - DECODE RESULT: ',result)
    if(!result){
         const res = await fetchRefreshToken(body.refreshToken)
        if(!res.ok){
            return {ok: false, access: '', refresh: ''}
        }
        const data = await res.json()
        console.log('data', data.access, data.refresh)
        return { ok: true, access:data.access, refresh: body.refresh}
    }
    console.log('-----------------------------------------------------')
    console.log('token', body.token,'refesh', body.refreshToken)
    console.log('-----------------------------------------------------')

    return {ok: true, access: body.token, refresh: body.refreshToken}
})*/
