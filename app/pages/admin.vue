<script setup>
import { FileText, Puzzle, Database } from 'lucide-vue-next';

definePageMeta({
  layout: "admin",
});

useHead({ title: 'Admin Dashboard' });
</script>

<template>
  <div class="admin_page">
    <div class="page_header">
      <h1 class="page_header__title">Admin Dashboard</h1>
      <p class="page_header__subtitle">
        This page uses a custom layout defined with definePageMeta
      </p>
    </div>

    <div class="concept_card">
      <span class="concept_card__badge">Nuxt Feature</span>
      <h2 class="concept_card__title">Custom Layouts with definePageMeta</h2>
      <p class="concept_card__description">
        Nuxt allows pages to use different layouts by calling definePageMeta({ layout: "admin" }).
        This page uses the admin layout instead of the default layout, giving it a sidebar navigation.
      </p>
      <p class="concept_card__description">
        <strong>Why use it:</strong> Layouts let you share common UI (headers, sidebars) across pages without repeating code, and quickly switch entire page structures.
        <strong>When to use:</strong> Use 'default' for public pages, 'admin' for authenticated dashboards with sidebars, and 'blank' for login/signup screens.
      </p>
    </div>

    <div class="admin_page__stats">
      <div class="card">
        <FileText :size="24" class="admin_page__stat_icon" />
        <h3 class="card__title">Total Pages</h3>
        <p class="card__body">17 learning pages across the app</p>
      </div>
      <div class="card">
        <Puzzle :size="24" class="admin_page__stat_icon" />
        <h3 class="card__title">Components</h3>
        <p class="card__body">2 reusable Vue components</p>
      </div>
      <div class="card">
        <Database :size="24" class="admin_page__stat_icon" />
        <h3 class="card__title">Store</h3>
        <p class="card__body">1 Pinia counter store</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin_page {
  &__stats {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: var(--space_lg);
  }

  &__stat_icon {
    color: var(--color_primary);
    margin-bottom: var(--space_sm);
  }
}
</style>
