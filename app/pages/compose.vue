<script setup>
const { count, increment, decrement } = useCounter();
useHead({ title: 'Composable Counter' });
</script>

<template>
  <div class="page_container">
    <div class="page_header">
      <h1 class="page_header__title">Composable Counter</h1>
      <p class="page_header__subtitle">
        Reusable logic extracted into a composable function
      </p>
    </div>

    <div class="concept_card">
      <span class="concept_card__badge">Vue 3 Pattern</span>
      <h2 class="concept_card__title">Composables — Reusable Stateful Logic</h2>
      <p class="concept_card__description">
        The useCounter composable encapsulates a reactive count value with increment and decrement
        functions. Composables are the Vue 3 way to extract and reuse stateful logic across
        components. Nuxt auto-imports composables from the composables/ directory.
      </p>
      <p class="concept_card__description">
        <strong>Why use it:</strong> Write logic once, reuse it everywhere. Keeps components clean by separating UI from business logic. Replaces Vue 2 Mixins without naming collisions.
        <strong>When to use:</strong> Whenever you repeat the same stateful logic in multiple components — e.g., form validation, data fetching patterns, or mouse tracking.
      </p>
    </div>

    <div class="demo_area">
      <p class="demo_area__label">Counter Value</p>
      <p class="demo_area__value">{{ count }}</p>
      <div class="demo_area__actions">
        <button class="btn btn--primary" @click="increment">Increment</button>
        <button class="btn btn--danger" @click="decrement">Decrement</button>
      </div>
    </div>

    <NuxtLink to="/" class="back_link">Back to Home</NuxtLink>
  </div>
</template>
