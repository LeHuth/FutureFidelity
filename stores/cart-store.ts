import {defineStore} from "pinia";
import type {productInterface as Product} from "@/types";

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cart: [] as Product[],
        }
    },
    actions: {
        addToCart(product: Product) {
            this.cart.push(product)
        },
        removeFromCart(index: number) {
            this.cart.splice(index, 1)
        }
    },
    getters: {
        getCart(): Product[] {
            return this.cart
        },
        getCartTotal(): number {
            return this.cart.reduce((acc, item) => acc + Number(item.price), 0)
        },
        getAmountOfItems(): number {
            return this.cart.length
        }
    },
    persist: {
        storage: persistedState.localStorage,
    },
})