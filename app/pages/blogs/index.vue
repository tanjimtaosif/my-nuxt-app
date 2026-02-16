<script setup>
import { Code, Globe, CircleHelp } from 'lucide-vue-next';
useHead({ title: 'Blogs' });
</script>
<template>
  <div class="page_container">
    <div class="page_header">
      <h1 class="page_header__title">Blog Section</h1>
      <p class="page_header__subtitle">
        Demonstrating nested routes with Nuxt file-based routing
      </p>
    </div>

    <div class="concept_card">
      <span class="concept_card__badge">Nuxt Routing</span>
      <h2 class="concept_card__title">Nested Routes & Catch-All Pages</h2>
      <p class="concept_card__description">
        Placing Vue files inside a subdirectory like pages/blogs/ creates nested routes automatically.
        The [...slug].vue file acts as a catch-all route, handling any URL path under /blogs that
        doesn't match a defined route — perfect for 404 pages within a section.
      </p>
      <p class="concept_card__description">
        <strong>Why use it:</strong> Nested routes let you build complex apps with sub-views while keeping code organized by feature — no router.js needed.
        <strong>When to use:</strong> For content hierarchies like blogs with categories, settings pages with tabs, or any section with its own sub-navigation.
      </p>
    </div>

    <div class="section_grid">
      <NuxtLink to="/blogs/javascript" class="card">
        <Code :size="24" class="blog_card__icon" />
        <h3 class="card__title">JavaScript Blog</h3>
        <p class="card__body">Static nested route at /blogs/javascript</p>
      </NuxtLink>
      <NuxtLink to="/blogs/nuxt" class="card">
        <Globe :size="24" class="blog_card__icon" />
        <h3 class="card__title">Nuxt JS Blog</h3>
        <p class="card__body">Static nested route at /blogs/nuxt</p>
      </NuxtLink>
      <NuxtLink to="/blogs/nonexistent/page" class="card">
        <CircleHelp :size="24" class="blog_card__icon" />
        <h3 class="card__title">Try a Missing Route</h3>
        <p class="card__body">See the catch-all [...slug].vue in action</p>
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

.blog_card__icon {
  color: var(--color_primary);
  margin-bottom: var(--space_sm);
}
</style>
