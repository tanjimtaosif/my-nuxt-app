<script setup>
useHead({ title: 'Contact' });
</script>

<template>
  <div class="page_container">
    <div class="page_header">
      <h1 class="page_header__title">Contact Us</h1>
      <p class="page_header__subtitle">A simple static page demonstrating basic Nuxt routing</p>
    </div>

    <div class="concept_card">
      <span class="concept_card__badge">Nuxt Routing</span>
      <h2 class="concept_card__title">File-Based Routing</h2>
      <p class="concept_card__description">
        This page exists simply because contact.vue is placed inside the pages/ directory.
        Nuxt automatically creates the /contact route — no manual router configuration needed.
      </p>
    </div>

    <div class="card">
      <h3 class="card__title">Get In Touch</h3>
      <p class="card__body">
        This is a placeholder contact page. In a real application, you would add a contact form here
        with fields like name, email, and message.
      </p>
    </div>

    <NuxtLink to="/" class="back_link">Back to Home</NuxtLink>
  </div>
</template>