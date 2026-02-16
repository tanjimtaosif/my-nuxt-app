<script setup>
useHead({ title: 'About Products' });
</script>

<template>
  <div class="page_container">
    <div class="page_header">
      <h1 class="page_header__title">About Our Products</h1>
      <p class="page_header__subtitle">A static nested route within the products section</p>
    </div>

    <div class="concept_card">
      <span class="concept_card__badge">Nested Route</span>
      <h2 class="concept_card__title">Static Nested Route — /products/about</h2>
      <p class="concept_card__description">
        This page is created by placing about.vue inside the pages/products/ directory.
        It sits alongside the dynamic [id] route and the index page, demonstrating how
        static and dynamic routes coexist in the same directory.
      </p>
    </div>

    <div class="card">
      <h3 class="card__title">About This Page</h3>
      <p class="card__body">
        In a real application, this page would describe the product catalog, brand story,
        or quality certifications. For now, it demonstrates nested file-based routing.
      </p>
    </div>

    <NuxtLink to="/products" class="back_link">Back to Products</NuxtLink>
  </div>
</template>