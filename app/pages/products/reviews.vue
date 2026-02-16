<script setup>
const lazyReviewSection = defineAsyncComponent(
  () => import("@/components/ReviewSection.vue"),
);
useHead({ title: 'Product Reviews' });
</script>
<template>
  <div class="page_container">
    <div class="page_header">
      <h1 class="page_header__title">Product Reviews</h1>
      <p class="page_header__subtitle">
        Lazy-loaded component rendered only on the client side
      </p>
    </div>

    <div class="concept_card">
      <span class="concept_card__badge">Performance</span>
      <h2 class="concept_card__title">defineAsyncComponent &amp; ClientOnly</h2>
      <p class="concept_card__description">
        defineAsyncComponent lazily loads a component only when it's needed, reducing the initial
        bundle size. The ClientOnly wrapper ensures the component only renders on the client side,
        skipping server-side rendering — useful for browser-dependent features.
      </p>
    </div>

    <ClientOnly>
      <LazyReviewSection />
      <template #fallback>
        <div class="card">
          <p class="card__body">Loading reviews...</p>
        </div>
      </template>
    </ClientOnly>

    <NuxtLink to="/products" class="back_link">Back to Products</NuxtLink>
  </div>
</template>
