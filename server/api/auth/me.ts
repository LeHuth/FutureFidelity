export default defineEventHandler(async (ctx) => {
    console.log('something something')
    const header = getHeaders(ctx)
    const response = await fetch('http://localhost:8000/api/auth/me/', {
        method:'get',
        // @ts-ignore
        headers: header
    })
    return await response.json()
})