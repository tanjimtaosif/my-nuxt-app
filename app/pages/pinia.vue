<script setup>
const counter = useCounterStore();
</script>

<template>
  <div>
    <h2>Pinia Example</h2>
    <h1>Counter: {{ counter.count }}</h1>
    <h2>Double: {{ counter.doubleCount }}</h2>

    <button @click="counter.increment()">+</button>
    <button @click="counter.decrement()">-</button>
  </div>

  <NuxtLink to="/">Back to home</NuxtLink>
</template>
