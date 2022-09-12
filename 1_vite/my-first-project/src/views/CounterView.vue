<script setup>
import { counter } from '@/stores/counterStore'
</script>

<template>
    <main>
        <div>
            <h1>{{ counter.count }}</h1>
        <button @click="counter.increment()">Increment</button>
        </div>
    </main>
</template>
