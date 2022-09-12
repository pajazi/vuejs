<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import { onMounted, ref } from "vue";

//EXPERIMENTAL $ sign for not using ref.value only using ref = 'new value update'
const message = $ref("Hello, World!");

onMounted(() => {
  // message.value = 'qweqwew';
  message = 'Payche';
})

</script>

<template>
  <main>
    <TheWelcome />
    {{message}}

    <input v-model="message" />
  </main>
</template>
