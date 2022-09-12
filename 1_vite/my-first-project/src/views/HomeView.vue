<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import { useFlash } from '@/composables/useFlash'
let { flash } = useFlash()
</script>

<template>
  <main>
    <TheWelcome />
    {{message}}

    <button @click="flash('It works!')">Click me!</button>
  </main>
</template>
