<script setup>
const { count, increment, decrement } = useCounter();
</script>
<template>
  <div>
    <h2>Counter using composable</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increatment</button>
    <button @click="decrement">Increatment</button>
  </div>
  <NuxtLink to="/">Back to home</NuxtLink>
</template>
