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
        },
        setQuantity(index: number, quantity: number) {
            this.cart[index].quantity = quantity
        }
    },
    getters: {
        getCart(): Product[] {
            return this.cart
        },
        getSubTotal(): number {
            return this.cart.reduce((acc, item) => acc + Number(item.price )* item.quantity, 0)
        },
        getAmountOfItems(): number {
            return this.cart.length
        },
        getVat(): number {
            return  Number(this.cart.reduce((acc, item) => acc + Number(item.price) * item.quantity * 0.2, 0).toString().slice(0, 5))
        }
    },
    persist: {
        storage: persistedState.localStorage,
    },
})