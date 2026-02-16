<script setup>
import { Settings, BarChart3, Home, Menu, X } from 'lucide-vue-next';
import { ref } from 'vue';

const isSidebarOpen = ref(false);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

function closeSidebar() {
  isSidebarOpen.value = false;
}
</script>

<template>
  <div class="admin_layout">
    <div
      v-if="isSidebarOpen"
      class="admin_overlay"
      @click="closeSidebar"
    />
    <aside
      class="admin_sidebar"
      :class="{ 'admin_sidebar--open': isSidebarOpen }"
      aria-label="Admin navigation"
    >
      <div class="admin_sidebar__header">
        <Settings :size="20" class="admin_sidebar__icon" />
        <h2 class="admin_sidebar__title">Admin Panel</h2>
      </div>
      <nav class="admin_sidebar__nav">
        <NuxtLink to="/admin" class="admin_sidebar__link" @click="closeSidebar">
          <BarChart3 :size="16" /> Dashboard
        </NuxtLink>
        <NuxtLink to="/" class="admin_sidebar__link" @click="closeSidebar">
          <Home :size="16" /> Back to Site
        </NuxtLink>
      </nav>
    </aside>
    <main class="admin_content">
      <button
        class="admin_content__toggle"
        aria-label="Toggle admin sidebar"
        @click="toggleSidebar"
      >
        <Menu :size="20" />
      </button>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.admin_layout {
  display: flex;
  min-height: 100vh;
}

.admin_overlay {
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: var(--z_header);
  }
}

.admin_sidebar {
  width: var(--sidebar_width);
  background-color: var(--color_bg_admin);
  padding: var(--space_xl) var(--space_lg);
  flex-shrink: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    transform: translateX(-100%);
    transition: transform var(--transition_base);
    z-index: var(--z_overlay);

    &--open {
      transform: translateX(0);
    }
  }

  &__header {
    display: flex;
    align-items: center;
    gap: var(--space_sm);
    margin-bottom: var(--space_2xl);
    padding-bottom: var(--space_lg);
    border-bottom: 1px solid var(--color_white_alpha_10);
  }

  &__icon {
    color: var(--color_text_inverse);
  }

  &__title {
    font-size: var(--font_size_lg);
    font-weight: var(--font_weight_bold);
    color: var(--color_text_inverse);
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: var(--space_xs);
  }

  &__link {
    display: flex;
    align-items: center;
    gap: var(--space_sm);
    padding: var(--space_sm) var(--space_md);
    border-radius: var(--border_radius_md);
    color: rgba(var(--color_text_inverse_rgb), 0.7);
    font-size: var(--font_size_sm);
    font-weight: var(--font_weight_medium);
    transition: all var(--transition_fast);
    text-decoration: none;

    &:hover {
      color: var(--color_text_inverse);
      background-color: var(--color_white_alpha_10);
    }

    &.router-link-exact-active {
      color: var(--color_text_inverse);
      background-color: rgba(var(--color_secondary_rgb), 0.3);
    }
  }
}

.admin_content {
  flex: 1;
  padding: var(--space_2xl);
  background-color: var(--color_bg);

  &__toggle {
    display: none;
    align-items: center;
    gap: var(--space_sm);
    background: none;
    border: 1px solid var(--color_border);
    color: var(--color_text);
    padding: var(--space_sm);
    border-radius: var(--border_radius_md);
    margin-bottom: var(--space_lg);
    transition: background-color var(--transition_fast);

    &:hover {
      background-color: var(--color_primary_light);
    }

    @media (max-width: 768px) {
      display: inline-flex;
    }
  }
}
</style>
