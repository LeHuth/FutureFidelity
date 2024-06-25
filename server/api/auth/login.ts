export default defineEventHandler(async (ctx) => {
  const body = await readBody(ctx)

  console.log(body)

    const response = await fetch('http://localhost:8000/api/auth/login/', {
        method:'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })

    const data = await response.json()

    console.log('data', data.access)

    return({token: {accessToken: data.access, refreshToken: data.refresh}})
})