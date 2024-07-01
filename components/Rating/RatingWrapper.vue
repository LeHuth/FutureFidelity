<script setup lang="ts">
import {StarIcon, ArrowUpIcon, ChevronUpIcon, ChevronDownIcon} from "@heroicons/vue/20/solid";
import DateTimeFormat = Intl.DateTimeFormat;

const props = defineProps({
  review: {
    type: Object,
    required: true
  }
})

const review = {
  'author': 'John Doe',
  'rating': 4,
  'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in nunc. Donec nec libero'
}
</script>

<template>
  <div class="pt-4 pb-2">
  <div class="flex items-center">
    <div class="avatar">
      <div class="w-12 rounded-full">
        <img :src="`http://localhost:8000${props.review.customer.image}`" />
      </div>
    </div>
    <div class="ml-4">
      <h4 class="text-sm font-bold text-gray-900">{{ props.review.customer.username }}</h4>
      <div class="mt-1 flex items-center">
        <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[props.review.stars > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
      </div>
      <p class="sr-only">{{ review.rating }} out of 5 stars</p>
    </div>
  </div>
  <div class="mt-4  space-y-6 text-base italic text-gray-600" v-html="props.review.description" />
    <div class="flex gap-2 justify-end">
      <div class="flex-1">
        <p>
          {{new Date(props.review.created_at).toLocaleDateString()}}
        </p>
      </div>
      <div class="flex">
        <p>
          {{props.review.upvotes}}
        </p>
        <button class="btn btn-square btn-outline btn-sm p-0.5 outline-none border-none hover:bg-white">
          <ChevronUpIcon />
        </button>
      </div>
      <div class="flex">
        <p>
          {{props.review.downvotes}}
        </p>
        <button class="btn btn-square btn-outline btn-sm p-0.5 outline-none border-none hover:bg-white">
          <ChevronDownIcon />
        </button>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>