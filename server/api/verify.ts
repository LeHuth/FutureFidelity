import {jwtVerify} from "jose";
export default defineEventHandler(async (ctx) => {
    const body = await readBody(ctx)
    console.log('Token:', body.token)
    console.log('this is server side code')
    try{
        const decoded = await jwtVerify(body.token || '', new TextEncoder().encode('MySecretKey'));
        return true
    } catch (e) {
        console.error(e)
        if(e.toString().includes('exp')){
            console.log('Token expired')
        }
        return false
    }
})