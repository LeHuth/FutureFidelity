<template>
  <div class="bg-gray-50">
    <div>
      <main>
        <div class="bg-white">
          <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Workspace sale</h1>
            <p class="mt-4 max-w-xl text-sm text-gray-700">Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity and organization with these sale items before we run out.</p>
          </div>
        </div>


        <!-- Product grid -->
        <section aria-labelledby="products-heading" class="mx-auto max-w-2xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a v-for="product in data" :key="product.id" class="group">
              <Card :product="product"/>
            </a>
          </div>
        </section>
      </main>
      <Footer/>

    </div>
  </div>
</template>

<script setup>

definePageMeta({
  auth:false
})
import { ref } from 'vue'

import Footer from "~/components/Footer.vue";

const { data } = await useFetch('http://localhost:8000/api/products/vinyls/all')



const mobileMenuOpen = ref(false)
const mobileFiltersOpen = ref(false)
</script>