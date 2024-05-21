<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <nuxt-link to="/">
        <a class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
      </nuxt-link>

      <div class="flex justify-end">
        <a href="#" class="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block">
          <span class="sr-only">Search</span>
          <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
        </a>
        <!-- Account -->
        <a href="#" class="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
          <span class="sr-only">Account</span>
          <UserIcon class="h-6 w-6" aria-hidden="true" />
        </a>
        <!-- Cart -->
          <a id="cart-icon" href="#" class="p-2 cursor-default text-gray-400 lg:ml-4">
            <Popover class="flow-root text-sm lg:relative">
              <PopoverButton class="group -m-2 flex items-center p-2">
                <ShoppingBagIcon class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{{cartStore.getAmountOfItems}}</span>
                <span class="sr-only">items in cart, view bag</span>
              </PopoverButton>
              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <PopoverPanel @click.stop class="absolute hover:text-gray-400 inset-x-0 top-16 mt-px bg-white py-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                  <h2 class="sr-only">Shopping Cart</h2>

                  <form v-if="products.length > 0" class="mx-auto max-w-2xl px-4 hover:text-gray-400">
                    <ul role="list" class="divide-y divide-gray-200">
                      <li v-for="(product, idx) in products" :key="product.id" class="flex items-center py-6">
                        <img :src="product.image" alt="alt" class="h-16 w-16 flex-none rounded-md border border-gray-200" />
                        <div class="ml-4 flex-auto flex justify-between">
                          <div>
                            <h3 class="font-medium text-gray-900">
                              <a>{{ product.name }}</a>
                            </h3>
                            <p class="text-gray-500">{{ product.price }}$</p>
                          </div>
                          <TrashIcon @click.stop="cartStore.removeFromCart(idx)" class="h-5 w-5 self-center hover:cursor-pointer hover:text-red-500"/>
                        </div>
                      </li>
                    </ul>

                    <button type="submit" class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Checkout</button>

                    <p class="mt-6 text-center">
                      <nuxt-link to="/cart">
                        <a class="text-sm font-medium text-indigo-600 hover:text-indigo-500">View Shopping Bag</a>
                      </nuxt-link>
                    </p>
                  </form>
                  <p v-else class="text-center text-md">
                    Your cart is empty
                  </p>
                </PopoverPanel>
              </transition>
            </Popover>
          </a>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <a href="#" class="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block">
              <span class="sr-only">Search</span>
              <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
            </a>

            <!-- Account -->
            <a href="#" class="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
              <span class="sr-only">Account</span>
              <UserIcon class="h-6 w-6" aria-hidden="true" />
            </a>

            <!-- Cart -->
            <div class="ml-4 flow-root lg:ml-6">
              <a href="#" class="group -m-2 flex items-center p-2">
                <ShoppingBagIcon class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                <span class="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, Popover, PopoverPanel, PopoverButton } from '@headlessui/vue'
import { XMarkIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, TrashIcon } from '@heroicons/vue/24/outline'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const cartStore = useCartStore()

const products = cartStore.getCart
console.log(products)
const mobileMenuOpen = ref(false)
</script>

<style scoped>
#cart-icon:hover{
  color: rgb(107 114 128)
}
</style>