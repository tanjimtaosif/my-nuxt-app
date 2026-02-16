<script setup>
import { ClipboardList, Star, Package } from 'lucide-vue-next';
useHead({ title: 'Products' });
</script>
<template>
  <div class="page_container">
    <div class="page_header">
      <h1 class="page_header__title">Products Section</h1>
      <p class="page_header__subtitle">
        Exploring nested and dynamic routing with the products directory
      </p>
    </div>

    <div class="concept_card">
      <span class="concept_card__badge">Nuxt Routing</span>
      <h2 class="concept_card__title">Nested Routes & Dynamic Parameters</h2>
      <p class="concept_card__description">
        The products/ directory contains static routes (about, reviews), a dynamic route ([id]),
        and this index page. Nuxt creates all these routes from the file structure automatically.
        The [id] folder creates routes like /products/1, /products/2, etc.
      </p>
      <p class="concept_card__description">
        <strong>Why use it:</strong> One template serves thousands of pages — no need to create a separate .vue file for each product, user, or article.
        <strong>When to use:</strong> For any resource with unique IDs: products, user profiles, order details, or article pages.
      </p>
    </div>

    <div class="section_grid">
      <NuxtLink to="/products/about" class="card">
        <ClipboardList :size="24" class="product_card__icon" />
        <h3 class="card__title">About Products</h3>
        <p class="card__body">Static nested route at /products/about</p>
      </NuxtLink>
      <NuxtLink to="/products/reviews" class="card">
        <Star :size="24" class="product_card__icon" />
        <h3 class="card__title">Product Reviews</h3>
        <p class="card__body">Lazy-loaded component with ClientOnly</p>
      </NuxtLink>
      <NuxtLink to="/products/1" class="card">
        <Package :size="24" class="product_card__icon" />
        <h3 class="card__title">Product #1</h3>
        <p class="card__body">Dynamic route with param id=1</p>
      </NuxtLink>
      <NuxtLink to="/products/42" class="card">
        <Package :size="24" class="product_card__icon" />
        <h3 class="card__title">Product #42</h3>
        <p class="card__body">Dynamic route with param id=42</p>
      </NuxtLink>
    </div>

    <NuxtLink to="/" class="back_link">Back to Home</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.section_grid .card {
  text-decoration: none;
  color: inherit;
  display: block;
}

.product_card__icon {
  color: var(--color_primary);
  margin-bottom: var(--space_sm);
}
</style>
