<script setup>
const route = useRoute();
useHead({ title: `Product #${route.params.id}` });
</script>

<template>
  <div class="page_container">
    <div class="page_header">
      <h1 class="page_header__title">Product #{{ route.params.id }}</h1>
      <p class="page_header__subtitle">
        Dynamic page generated from the URL parameter
      </p>
    </div>

    <div class="concept_card">
      <span class="concept_card__badge">Dynamic Route</span>
      <h2 class="concept_card__title">[id] — Dynamic Route Parameters</h2>
      <p class="concept_card__description">
        This page is rendered by [id]/index.vue inside the products directory.
        The [id] folder name tells Nuxt to treat the URL segment as a dynamic parameter.
        You can access it via useRoute().params.id — currently showing id={{ route.params.id }}.
      </p>
    </div>

    <div class="demo_area">
      <p class="demo_area__label">Route Parameter</p>
      <div class="demo_area__row">
        <span class="badge badge--info">params.id = {{ route.params.id }}</span>
      </div>
      <div class="demo_area__row">
        <span class="badge badge--success">Full path: {{ route.fullPath }}</span>
      </div>
    </div>

    <NuxtLink to="/products" class="back_link">Back to Products</NuxtLink>
  </div>
</template>