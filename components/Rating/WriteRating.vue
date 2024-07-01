<script setup lang="ts">

const props = defineProps({
  productId: {
    type: String,
    required: true
  }
})
const localData = ref({
  stars:5,
  title:'',
  description:'',
  product:props.productId
})
const myModal = ref()
const setStars = (value: number) => localData.value.stars = value
const { data } = useAuth()
console.log('DATA', data)
const token = data._object['$sauth:raw-token'];
console.log('Token:', token);

const sendReview = async ()=>{
  const response = await fetch('http://localhost:8000/api/products/product/review/',{
    method:'post',
    body:JSON.stringify(localData.value),
    headers:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    }
  })
  if(!response.ok){
    console.log('Error:', response)
    return
  }
  myModal.value.close()
  const result = await response.json()
  console.log('Result:', result)
}

</script>

<template>
  <button class="btn btn-sm btn-outline btn-block h-5" onclick="my_modal_3.showModal()">Write a review</button>
  <dialog ref="myModal" id="my_modal_3" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="text-lg font-bold mb-2">Give overall rating</h3>
      <div class="rating">
        <template v-for="star in [1, 2, 3, 4, 5]">
          <input @click="setStars(star)" :value="star-1" type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
        </template>
      </div>
      <div class="divider"></div>
      <h3 class="text-lg font-bold mb-2">Add a headline</h3>
      <input v-model="localData.title" type="text" placeholder="Type here" class="input input-bordered w-full" />
      <div class="divider"></div>
      <h3 class="text-lg font-bold mb-2">Add a written review</h3>
      <textarea v-model="localData.description" class="textarea w-full textarea-bordered" placeholder="Bio"></textarea>
      <div class="divider"></div>
      <h3 class="text-lg font-bold mb-2">Add a photo or video</h3>
      <input type="file" class="file-input file-input-bordered w-full" />
      <button @click="sendReview" class="btn btn-sm btn-block btn-primary mt-6">Submit</button>
    </div>
  </dialog>
  <div>

  </div>
</template>

<style scoped>

</style>