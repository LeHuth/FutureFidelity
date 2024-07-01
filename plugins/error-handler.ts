export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:created', (app)=>{
        app.config.warnHandler = (msg, vm, trace) => {
            console.error('invoked handler')
            return;
        }
    })
})
