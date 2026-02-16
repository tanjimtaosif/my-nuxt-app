<script setup>
import { SearchX } from 'lucide-vue-next';

const route = useRoute();
useHead({ title: 'Page Not Found' });
</script>

<template>
  <div class="page_container">
    <div class="not_found">
      <SearchX :size="64" class="not_found__icon" />
      <h1 class="not_found__title">Blog Not Found</h1>
      <p class="not_found__message">
        You tried to access: <strong>/blogs/{{ route.params.slug.join("/") }}</strong>
      </p>

      <div class="concept_card">
        <span class="concept_card__badge">Catch-All Route</span>
        <h2 class="concept_card__title">[...slug].vue — Catch-All Route Handler</h2>
        <p class="concept_card__description">
          This page is rendered by [...slug].vue which catches any URL path under /blogs
          that doesn't match a defined route. The slug param is an array of path segments,
          accessed via useRoute().params.slug.
        </p>
        <p class="concept_card__description">
          <strong>Why use it:</strong> Gracefully handles unknown URLs with a custom 404 experience instead of a generic error. Also useful for CMS-driven content where paths are dynamic.
          <strong>When to use:</strong> For 404 fallback pages within a section, or when URLs come from a headless CMS and aren't known at build time.
        </p>
      </div>

      <NuxtLink to="/blogs" class="btn btn--primary">Go to Blogs</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not_found__icon {
  color: var(--color_text_light);
  margin-bottom: var(--space_md);
}
</style>
