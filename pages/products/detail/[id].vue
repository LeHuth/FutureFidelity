
<template>
  <div class="bg-white">


    <main class="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <!-- Product -->
        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <!-- Image gallery -->
          <TabGroup as="div" class="flex flex-col-reverse">
            <!-- Image selector -->
            <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <TabList class="grid grid-cols-4 gap-6">
                <Tab v-for="image in product.images" :key="image.id" class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4" v-slot="{ selected }">
                  <span class="sr-only">{{ image.name }}</span>
                  <span class="absolute inset-0 overflow-hidden rounded-md">
                    <img :src="image.src" alt="" class="h-full w-full object-cover object-center" />
                  </span>
                  <span :class="[selected ? 'ring-indigo-500' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2']" aria-hidden="true" />
                </Tab>
              </TabList>
            </div>

            <TabPanels class="aspect-h-1 aspect-w-1 w-full">
              <TabPanel v-for="image in product.images" :key="image.id">
                <img :src="data?.image" :alt="image.alt" class="h-full w-full object-cover object-center sm:rounded-lg" />
              </TabPanel>
            </TabPanels>
          </TabGroup>

          <!-- Product info -->
          <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900">{{ data?.name}}</h1>

            <div class="mt-3">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl tracking-tight text-gray-800">{{ data?.price }}$</p>
            </div>

            <!-- Reviews -->
            <div class="mt-3">
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center">
                <div class="flex items-center">
                  <StarIcon v-if="data?.overall_rating" v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[data?.overall_rating > rating ? 'text-indigo-500' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
                </div>
                <p class="sr-only">{{ data?.overall_rating }} out of 5 stars</p>
              </div>
            </div>


            <!-- add to bag / fav -->
            <section class="mt-6">
              <!-- Colors -->
<!--              <div>
                <h3 class="text-sm text-gray-600">Color</h3>

                <RadioGroup v-model="selectedColor" class="mt-2">
                  <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                  <div class="flex items-center space-x-3">
                    <RadioGroupOption as="template" v-for="color in product.colors" :key="color.name" :value="color" v-slot="{ active, checked }">
                      <div :class="[color.selectedColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                        <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
                        <span aria-hidden="true" :class="[color.bgColor, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
                      </div>
                    </RadioGroupOption>
                  </div>
                </RadioGroup>
              </div>-->

              <div class="mt-10 flex">
                <button @click="addToCart" class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">Add to bag</button>

                <button type="button" class="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                  <HeartIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                  <span class="sr-only">Add to favorites</span>
                </button>
              </div>
            </section>
            <!-- Tracklist -->
            <section class="mt-12">
              <h2 class="sr-only">Tracklist</h2>
              <div>
<!--                <h3 class="text-lg text-gray-600">Tracklist</h3>-->
                <div class="mt-2">
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2">
                    <div>
                      <h4 class="text-sm font-medium text-gray-900">Side A</h4>
                      <ul role="list" class="mt-2 space-y-4">
                        <li v-for="track in tracks.side_a" :key="track" class="flex justify-between">
                          <span class="text-sm">{{ track }}</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="text-sm font-medium text-gray-900">Side B</h4>
                      <ul role="list" class="mt-2 space-y-4">
                        <li v-for="track in tracks.side_b" :key="track" class="flex justify-between">
                          <span class="text-sm">{{ track }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="mt-8">
              <h3 class="sr-only">Description</h3>
              <div class="space-y-6 text-base text-gray-700" v-html="data?.description" />
            </div>


<!--            <section aria-labelledby="details-heading" class="mt-12">
              <h2 id="details-heading" class="sr-only">Additional details</h2>

              <div class="divide-y divide-gray-200 border-t">
                <Disclosure as="div" v-for="detail in product.details" :key="detail.name" v-slot="{ open }">
                  <h3>
                    <DisclosureButton class="group relative flex w-full items-center justify-between py-6 text-left">
                      <span :class="[open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium']">{{ detail.name }}</span>
                      <span class="ml-6 flex items-center">
                        <PlusIcon v-if="!open" class="block h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                        <MinusIcon v-else class="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500" aria-hidden="true" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel as="div" class="prose prose-sm pb-6">
                    <ul role="list">
                      <li v-for="item in detail.items" :key="item">{{ item }}</li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </section>-->
          </div>
        </div>

        <section aria-labelledby="related-heading" class="mt-16 border-t border-b border-gray-200 px-4 py-16 sm:px-0">
          <h2 id="related-heading" class="text-xl font-bold text-gray-900">Customers also bought</h2>

          <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="product in relatedProducts" :key="product.id">
              <div class="relative">
                <div class="relative h-72 w-full overflow-hidden rounded-lg">
                  <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
                </div>
                <div class="relative mt-4">
                  <h3 class="text-sm font-medium text-gray-900">{{ product.name }}</h3>
                  <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                </div>
                <div class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />
                  <p class="relative text-lg font-semibold text-white">{{ product.price }}</p>
                </div>
              </div>
              <div class="mt-6">
                <a :href="product.href" class="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >Add to bag<span class="sr-only">, {{ product.name }}</span></a
                >
              </div>
            </div>
          </div>
        </section>
        <ReviewSection/>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
    provideUseId,
} from '@headlessui/vue'
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/20/solid'
import type {productDetailInterface} from "~/types";



provideUseId(()=>useId())
const productDetail = ref<productDetailInterface | null>(null)

const {data, error } = useFetch<productDetailInterface>('http://localhost:8000/api/products/vinyls/get/5',{
  method:'get',
})
if (error.value) console.log('ERROR from useFetch: ', error.value)
if (data.value) console.log('data returned from useFetch: ', data)
const product = {
  name: 'Zip Tote Basket',
  price: '$140',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    {
      name: 'Materials',
      items: [
        'Waxed canvas outer shell',
        'Leather handle and tabs',
        'Nylon lining',
        'Metal zippers',
        'Stainless steel buckles',
      ],
    },
    // More sections...
  ],
}
const relatedProducts = [
  {
    id: 1,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  // More products...
]

const tracks = {
  "side_a": [
      "A1. The Beatles - Come Together",
      "A2. The Beatles - Something",
      "A3. The Beatles - Maxwell's Silver Hammer",
  ],
  "side_b": [
      "B1. The Beatles - Oh! Darling",
      "B2. The Beatles - Octopus's Garden",
      "B3. The Beatles - I Want You (She's So Heavy)",
      ]
}

const open = ref(false)
const selectedColor = ref(product.colors[0])

const cartStore = useCartStore()
const addToCart = () => {
  if(!data?.value) return
  cartStore.addToCart({
    id: data.value.id,
    name: data.value.name,
    price: data.value.price,
    image: data.value.image,
  })
}
</script>