<template>
  <footer class="site_footer_component">
    <p class="site_footer_component__text">&copy; 2026 Nuxt Lab. All rights reserved.</p>
  </footer>
</template>

<style lang="scss" scoped>
.site_footer_component {
  padding: var(--space_lg);
  text-align: center;
  border-top: 1px solid var(--color_border);
  margin-top: var(--space_xl);

  &__text {
    font-size: var(--font_size_sm);
    color: var(--color_text_light);
  }
}
</style>
