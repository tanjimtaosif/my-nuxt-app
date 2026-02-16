<script setup>
import { BookOpen, Home, FileText, Package, Shield, Menu, X } from 'lucide-vue-next';
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

function toggleMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMenu() {
  isMobileMenuOpen.value = false;
}
</script>

<template>
  <div class="site_layout">
    <header class="site_header">
      <div class="site_header__inner">
        <NuxtLink to="/" class="site_header__logo" @click="closeMenu">
          <BookOpen class="site_header__logo_icon" :size="22" />
          <span class="site_header__logo_text">Nuxt Lab</span>
        </NuxtLink>

        <button
          class="site_header__toggle"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
          aria-controls="main-nav"
          :aria-expanded="isMobileMenuOpen"
          @click="toggleMenu"
        >
          <X v-if="isMobileMenuOpen" :size="22" />
          <Menu v-else :size="22" />
        </button>

        <nav
          id="main-nav"
          class="site_header__nav"
          :class="{ 'site_header__nav--open': isMobileMenuOpen }"
          aria-label="Main navigation"
        >
          <NuxtLink to="/" class="site_header__link" @click="closeMenu">
            <Home :size="16" /> Home
          </NuxtLink>
          <NuxtLink to="/blogs" class="site_header__link" @click="closeMenu">
            <FileText :size="16" /> Blogs
          </NuxtLink>
          <NuxtLink to="/products" class="site_header__link" @click="closeMenu">
            <Package :size="16" /> Products
          </NuxtLink>
          <NuxtLink to="/admin" class="site_header__link site_header__link--admin" @click="closeMenu">
            <Shield :size="16" /> Admin
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main class="site_main">
      <slot />
    </main>

    <footer class="site_footer">
      <div class="site_footer__inner">
        <p class="site_footer__text">&copy; 2026 Nuxt Lab — A Vue 3 & Nuxt Learning Playground</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.site_layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.site_header {
  background-color: var(--color_bg_header);
  height: var(--header_height);
  position: sticky;
  top: 0;
  z-index: var(--z_header);

  &__inner {
    max-width: var(--max_width);
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--space_lg);
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: var(--space_sm);
    color: var(--color_text_inverse);
    text-decoration: none;

    &:hover {
      color: var(--color_text_inverse);
    }
  }

  &__logo_icon {
    flex-shrink: 0;
  }

  &__logo_text {
    font-size: var(--font_size_lg);
    font-weight: var(--font_weight_bold);
    letter-spacing: var(--letter_spacing_tight);
  }

  &__toggle {
    display: none;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: var(--color_text_inverse);
    padding: var(--space_sm);
    border-radius: var(--border_radius_md);
    transition: background-color var(--transition_fast);

    &:hover {
      background-color: var(--color_white_alpha_10);
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: var(--space_xs);

    @media (max-width: 768px) {
      display: none;
      position: absolute;
      top: var(--header_height);
      left: 0;
      right: 0;
      flex-direction: column;
      background-color: var(--color_bg_header);
      padding: var(--space_md) var(--space_lg);
      gap: var(--space_xs);
      box-shadow: var(--shadow_lg);
      z-index: var(--z_header);

      &--open {
        display: flex;
      }
    }
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: var(--space_xs);
    color: rgba(var(--color_text_inverse_rgb), 0.75);
    padding: var(--space_sm) var(--space_md);
    border-radius: var(--border_radius_md);
    font-size: var(--font_size_sm);
    font-weight: var(--font_weight_medium);
    transition: all var(--transition_fast);
    text-decoration: none;

    @media (max-width: 768px) {
      width: 100%;
      padding: var(--space_sm) var(--space_md);
    }

    &:hover {
      color: var(--color_text_inverse);
      background-color: var(--color_white_alpha_10);
    }

    &.router-link-active {
      color: var(--color_text_inverse);
      background-color: var(--color_white_alpha_15);
    }

    &--admin {
      color: var(--color_secondary);

      &:hover {
        color: var(--color_secondary_lighter);
      }
    }
  }
}

.site_main {
  flex: 1;
}

.site_footer {
  background-color: var(--color_bg_footer);
  padding: var(--space_lg) 0;
  margin-top: auto;

  &__inner {
    max-width: var(--max_width);
    margin: 0 auto;
    padding: 0 var(--space_lg);
    text-align: center;
  }

  &__text {
    color: rgba(var(--color_text_inverse_rgb), 0.5);
    font-size: var(--font_size_sm);
  }
}
</style>
