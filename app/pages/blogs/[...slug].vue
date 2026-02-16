<script setup>
const route = useRoute();
</script>

<template>
  <h2>Oops! page not found</h2>

  <p>
    You tried to access: <strong>{{ route.params.slug.join("/") }}</strong>
  </p>
  <p>Go back to <NuxtLink to="/blogs">Blogs Page</NuxtLink></p>
</template>
