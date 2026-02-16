<script setup>
useHead({
  titleTemplate: '%s — Nuxt Lab',
  meta: [
    { name: 'description', content: 'A hands-on playground to learn Vue 3 and Nuxt through interactive examples' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
