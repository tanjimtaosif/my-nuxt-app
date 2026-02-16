<script setup>
useHead({ title: 'JavaScript Blog' });
</script>

<template>
  <div class="page_container">
    <div class="page_header">
      <h1 class="page_header__title">JavaScript Blog</h1>
      <p class="page_header__subtitle">A static nested route inside the blogs directory</p>
    </div>

    <div class="concept_card">
      <span class="concept_card__badge">Nested Route</span>
      <h2 class="concept_card__title">Static Nested Route — /blogs/javascript</h2>
      <p class="concept_card__description">
        This page is created by placing javascript.vue inside the pages/blogs/ directory.
        Nuxt generates the route /blogs/javascript automatically from the file structure.
      </p>
      <p class="concept_card__description">
        <strong>Why use it:</strong> File-based routing means zero configuration — your folder structure IS your router. Each page is automatically code-split.
        <strong>When to use:</strong> For any page that logically belongs under a parent section, like blog posts under /blogs or settings tabs under /settings.
      </p>
    </div>

    <div class="card">
      <h3 class="card__title">About This Page</h3>
      <p class="card__body">
        In a real application, this would contain JavaScript articles and tutorials.
        For now, it demonstrates how Nuxt's file-based routing handles nested directories.
      </p>
    </div>

    <NuxtLink to="/blogs" class="back_link">Back to Blogs</NuxtLink>
  </div>
</template>
