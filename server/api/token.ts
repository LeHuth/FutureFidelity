export default defineEventHandler(async (ctx) => {
    const body = await readBody(ctx)
    fetch('http://localhost:8000/api/auth/token/verify/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({token: body.token}),
    })
        .then((res) => {
            return res.ok;

        })
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            return false
    })
})