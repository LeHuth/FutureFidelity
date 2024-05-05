import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            token: '',
            refreshToken: '',
            user: null,
        }
    },
    actions:{
        setToken(token: string){
            this.token = token
        },
        setRefreshToken(token: string){
            this.refreshToken = token
        },
        logout(){
            this.token = ''
            this.refreshToken = ''
            this.user = null
        }
    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    },
})