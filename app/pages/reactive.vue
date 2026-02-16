<script setup>
import { ref, computed, watch, reactive } from "vue";
import { ShoppingCart, CheckCircle } from 'lucide-vue-next';

useHead({ title: 'Reactivity System' });

const name = ref("");
const cart = reactive({
  items: [],
  total: 0,
});

const isBigCart = computed(() => cart.items.length >= 3);

watch(name, (newVal, oldVal) => {
  console.log(`Name changed from "${oldVal}" to "${newVal}"`);
});

function addItem() {
  cart.items.push("item");
  cart.total += 10;
}
</script>

<template>
  <div class="page_container">
    <div class="page_header">
      <h1 class="page_header__title">Vue 3 Reactivity System</h1>
      <p class="page_header__subtitle">
        Exploring ref, reactive, computed, and watch in action
      </p>
    </div>

    <div class="concept_card">
      <span class="concept_card__badge">Vue 3 Core</span>
      <h2 class="concept_card__title">ref, reactive, computed & watch</h2>
      <p class="concept_card__description">
        ref() creates a reactive primitive value. reactive() creates a reactive object.
        computed() derives a value that auto-updates when dependencies change.
        watch() observes a reactive source and runs a callback on change.
        Try typing a name and adding items to see reactivity in action.
      </p>
    </div>

    <div class="reactivity_demos">
      <!-- ref demo -->
      <div class="demo_area">
        <p class="demo_area__label">ref() — Reactive Primitive</p>
        <div class="demo_area__row">
          <input v-model="name" type="text" class="input" placeholder="Type your name..." />
        </div>
        <p class="demo_area__value reactivity_demos__name_value">
          Hello, {{ name || '...' }}
        </p>
        <p class="badge badge--info">Watcher logs name changes to console</p>
      </div>

      <!-- reactive + computed demo -->
      <div class="demo_area">
        <p class="demo_area__label">reactive() + computed()</p>
        <div class="demo_area__row">
          <ShoppingCart :size="16" />
          <span>{{ cart.items.length }} items — Total: ${{ cart.total }}</span>
        </div>
        <div class="demo_area__actions">
          <button class="btn btn--primary" @click="addItem">Add Item (+$10)</button>
        </div>
        <div v-if="isBigCart" class="reactivity_demos__big_cart">
          <CheckCircle :size="14" />
          <span class="badge badge--success">Big cart detected! (computed: items >= 3)</span>
        </div>
      </div>
    </div>

    <NuxtLink to="/" class="back_link">Back to Home</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.reactivity_demos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space_lg);

  &__name_value {
    font-size: var(--font_size_lg);
  }

  &__big_cart {
    display: flex;
    align-items: center;
    gap: var(--space_sm);
    margin-top: var(--space_md);
    color: var(--color_success);
  }
}
</style>
