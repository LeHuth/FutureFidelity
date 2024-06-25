export default defineEventHandler(async (ctx) => {
    const body = await readBody(ctx)
    console.log('body', body)

    const response = await fetch('http://localhost:8000/api/auth/token/refresh/',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            refresh: body.refreshToken
        })
    })

    const data = await response.json()
    console.log(data)
    return({token: {accessToken: data.access, refreshToken: data.refreshToken}})
})