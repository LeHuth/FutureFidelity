<script setup lang="ts">

import type {PropType} from "vue";
import type {productInterface} from "~/types";



const props = defineProps({
  product: {
    type: Object as PropType<productInterface>,
    required: true
  }

})

const navigateToProduct = () => {
  navigateTo('/products/detail/' + props.product?.id)
}
</script>

<template>
  <div @click="navigateToProduct" class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 ">
    <img :src="'http://localhost:8000' + product.image" alt="prod_image" class="h-full w-full object-cover object-center group-hover:opacity-75 hover:scale-105 transition-all duration-300" />
  </div>
  <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
  <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
</template>

<style scoped>

</style>