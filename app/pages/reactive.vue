<script setup>
import { ref, computed, watch, reactive } from "vue";

const name = ref("");
const cart = reactive({
  items: [],
  total: 0,
});

const isBigCart = computed(() => cart.items.length >= 3);

watch(name, (newVal, oldVal) => {
  console.log(`Name changed from ${oldVal} to ${newVal}`);
});

function addItem() {
  cart.items.push("item");
  cart.total += 10;
}
</script>

<template>
  <div>
    <input v-model="name" type="text" placeholder="Enter your name" />
    <p>Hello, {{ name }}</p>
    <p>Cart: {{ cart.items.length }} items: (total: ${{ cart.total }})</p>
    <button @click="addItem">Add items</button>
    <p v-if="isBigCart">You have a big cart</p>
  </div>
</template>
