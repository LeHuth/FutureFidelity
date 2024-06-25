<script setup lang="ts">
import {UserIcon} from "@heroicons/vue/24/outline";
import {Popover, PopoverButton, PopoverPanel} from "@headlessui/vue";
const {status, signOut} = useAuth()
</script>

<template>
    <Popover class="relative p-2">
      <PopoverButton>
        <UserIcon class="h-6 w-6" aria-hidden="true" />
      </PopoverButton>
      <PopoverPanel class="absolute z-50 shadow rounded-2xl bg-amber-50">
        <div class="flex flex-col p-8">

          <div v-if="status=='authenticated'">
            <button class="btn"  @click="()=>{signOut({callbackUrl: '/'})}">Logout</button>
            <button class="btn" @click="navigateTo('/me/')">Profile</button>
          </div>
          <button class="btn" v-else @click="navigateTo('/login')">Login</button>
        </div>
      </PopoverPanel>
    </Popover>
</template>

<style scoped>

</style>