// plugins/vue-warn-suppressor.ts
export default defineNuxtPlugin((nuxtApp) => {
        console.log('Vue warn suppressor plugin');
        const Vue = nuxtApp.vueApp;

        nuxtApp.hook('app:created', (err) => {
            console.log('Vue warn suppressor plugin');
            nuxtApp.vueApp.config.warnHandler = (msg, vm, trace) => {
                return;
            }
        });
        nuxtApp.hook('app:rendered', (err) => {
            console.log('Vue warn suppressor plugin');
            nuxtApp.vueApp.config.warnHandler = (msg, vm, trace) => {
                return;
            }

        });
    /*Vue.config.warnHandler = (msg, vm, trace) => {
            console.log('Vue warning suppressed:', msg, vm, trace)
            return;
        };*/

});
