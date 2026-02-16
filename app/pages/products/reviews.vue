<script setup>
const lazyReviewSection = defineAsyncComponent(
  () => import("@/components/ReviewSection.vue"),
);
</script>

<template>
  <div>
    <h1>Product Details</h1>
    <ClientOnly>
      <LazyReviewSection />
    </ClientOnly>
  </div>

  <NuxtLink to="/products">Go to Products Home</NuxtLink>
</template>
