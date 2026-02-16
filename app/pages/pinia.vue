<script setup>
const counter = useCounterStore();
useHead({ title: 'Pinia Store' });
</script>

<template>
  <div class="page_container">
    <div class="page_header">
      <h1 class="page_header__title">Pinia State Management</h1>
      <p class="page_header__subtitle">
        Managing global state with Vue's official store library
      </p>
    </div>

    <div class="concept_card">
      <span class="concept_card__badge">State Management</span>
      <h2 class="concept_card__title">Pinia Store — State, Getters &amp; Actions</h2>
      <p class="concept_card__description">
        Pinia is the official state management library for Vue 3. This store defines a count state,
        a doubleCount getter that computes a derived value, and increment/decrement actions.
        The @pinia/nuxt module auto-imports stores from the stores/ directory.
      </p>
    </div>

    <div class="pinia_demo">
      <div class="demo_area">
        <p class="demo_area__label">Count (State)</p>
        <p class="demo_area__value">{{ counter.count }}</p>
        <div class="demo_area__actions">
          <button class="btn btn--primary" @click="counter.increment()">+ Increment</button>
          <button class="btn btn--danger" @click="counter.decrement()">- Decrement</button>
        </div>
      </div>

      <div class="demo_area">
        <p class="demo_area__label">Double Count (Getter)</p>
        <p class="demo_area__value">{{ counter.doubleCount }}</p>
        <p class="badge badge--info">Computed from count × 2</p>
      </div>
    </div>

    <NuxtLink to="/" class="back_link">Back to Home</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.pinia_demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space_lg);
}
</style>
