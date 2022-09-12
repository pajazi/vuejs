<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { useStorage } from '@/composables/useStorage'

let food = useStorage('food')

</script>

<template>
    <main>
        <input
            type="text"
            placeholder="What is your favourte food?"
            v-model="food"
        />
    </main>
</template>
