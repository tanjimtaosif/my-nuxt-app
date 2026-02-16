<script setup>
import { ref, onMounted, onUpdated, onBeforeUnmount } from "vue";
import { CheckCircle, RefreshCw } from 'lucide-vue-next';

useHead({ title: 'Lifecycle Hooks' });

const count = ref(0);
const logs = ref([]);

onMounted(() => {
  logs.value.push({ icon: CheckCircle, text: "onMounted — Component has been mounted to the DOM", type: "success" });
});

onUpdated(() => {
  logs.value.push({ icon: RefreshCw, text: "onUpdated — Component re-rendered due to state change", type: "info" });
});

onBeforeUnmount(() => {
  console.log("onBeforeUnmount — Cleanup before component is destroyed");
});

onUnmounted(() => {
  console.log("onUnmounted — Component has been removed from the DOM");
});

function increment() {
  count.value++;
}
</script>

<template>
  <div class="page_container">
    <div class="page_header">
      <h1 class="page_header__title">Vue Lifecycle Hooks</h1>
      <p class="page_header__subtitle">
        Understanding the component lifecycle from mount to unmount
      </p>
    </div>

    <div class="concept_card">
      <span class="concept_card__badge">Vue 3 Core</span>
      <h2 class="concept_card__title">onMounted, onUpdated, onBeforeUnmount & onUnmounted</h2>
      <p class="concept_card__description">
        Vue components go through a lifecycle: created, mounted, updated, unmounted.
        onMounted runs after the component is added to the DOM.
        onUpdated fires after every re-render.
        onBeforeUnmount runs cleanup logic before the component is destroyed.
        onUnmounted runs after the component is fully removed.
        Click the button below and watch the console log update.
      </p>
    </div>

    <div class="demo_area">
      <p class="demo_area__label">Counter Value</p>
      <p class="demo_area__value">{{ count }}</p>
      <div class="demo_area__actions">
        <button class="btn btn--primary" @click="increment">Increment</button>
      </div>
    </div>

    <div v-if="logs.length" class="console_log">
      <p class="console_log__title">Lifecycle Log</p>
      <div v-for="(log, i) in logs" :key="i" class="console_log__entry">
        <component :is="log.icon" :size="14" />
        <span>{{ log.text }}</span>
      </div>
    </div>

    <NuxtLink to="/" class="back_link">Back to Home</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.console_log__entry {
  display: flex;
  align-items: center;
  gap: var(--space_sm);
}
</style>
