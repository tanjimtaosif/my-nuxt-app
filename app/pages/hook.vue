<script setup>
const { data, status } = await useAsyncData("posts", () =>
  $fetch("https://jsonplaceholder.typicode.com/posts/1"),
);

onNuxtReady(() => {
  console.log("Nuxt app is ready");
});

useHead({ title: 'Data Fetching' });
</script>

<template>
  <div class="page_container">
    <div class="page_header">
      <h1 class="page_header__title">Data Fetching with useAsyncData</h1>
      <p class="page_header__subtitle">
        Fetching data from an external API during server-side rendering
      </p>
    </div>

    <div class="concept_card">
      <span class="concept_card__badge">Nuxt Feature</span>
      <h2 class="concept_card__title">useAsyncData &amp; $fetch</h2>
      <p class="concept_card__description">
        useAsyncData wraps an async data-fetching function and handles it during SSR.
        The $fetch utility is Nuxt's built-in fetch wrapper. onNuxtReady runs a callback
        once the Nuxt app is fully hydrated on the client side.
      </p>
    </div>

    <div class="demo_area">
      <p class="demo_area__label">API Response — JSONPlaceholder Post #1</p>
      <div v-if="status === 'pending'" class="badge badge--warning">Loading...</div>
      <div v-else-if="data" class="data_display">{{ JSON.stringify(data, null, 2) }}</div>
      <div v-else class="badge badge--warning">No data available</div>
    </div>

    <NuxtLink to="/" class="back_link">Back to Home</NuxtLink>
  </div>
</template>
