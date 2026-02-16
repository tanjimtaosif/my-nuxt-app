<script setup>
const route = useRoute();
</script>
<template>
    <div>
        <h2>Product Dynamic Page</h2>
        <p>You are viewing product with id : {{ route.params.id }}</p>
        <NuxtLink to="/">Go to Home</NuxtLink>
    </div>
</template>