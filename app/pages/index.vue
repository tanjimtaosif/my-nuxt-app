<script setup>
import {
  Zap, ListChecks, RefreshCw, Blocks, Database,
  Download, FolderTree, Route, FileText, Package,
  ArrowRight
} from 'lucide-vue-next';

useHead({ title: 'Home' });
const vueTopics = [
  {
    to: '/reactive',
    icon: Zap,
    title: 'Reactivity',
    description: 'ref, reactive, computed & watch — the core of Vue\'s reactivity system',
    color: 'var(--color_success)',
  },
  {
    to: '/list',
    icon: ListChecks,
    title: 'List Rendering',
    description: 'Build a to-do list using v-for, v-model, v-if & event handling',
    color: 'var(--color_primary)',
  },
  {
    to: '/life-cycle',
    icon: RefreshCw,
    title: 'Lifecycle Hooks',
    description: 'onMounted, onUpdated, onBeforeUnmount — component lifecycle in action',
    color: 'var(--color_warning)',
  },
  {
    to: '/compose',
    icon: Blocks,
    title: 'Composables',
    description: 'Extract reusable stateful logic with the useCounter composable',
    color: 'var(--color_secondary)',
  },
  {
    to: '/pinia',
    icon: Database,
    title: 'Pinia Store',
    description: 'Global state management with state, getters & actions',
    color: 'var(--color_danger)',
  },
];

const nuxtTopics = [
  {
    to: '/hook',
    icon: Download,
    title: 'Data Fetching',
    description: 'Server-side data fetching with useAsyncData & $fetch',
    color: 'var(--color_primary)',
  },
  {
    to: '/blogs',
    icon: FolderTree,
    title: 'Nested Routes',
    description: 'Blog section with nested pages and catch-all 404 handling',
    color: 'var(--color_success)',
  },
  {
    to: '/products',
    icon: Package,
    title: 'Dynamic Routes',
    description: 'Products section with [id] dynamic parameters',
    color: 'var(--color_warning)',
  },
  {
    to: '/contact',
    icon: FileText,
    title: 'Static Page',
    description: 'Simple file-based routing — just create a .vue file',
    color: 'var(--color_text_light)',
  },
];

const dynamicRoutes = [
  { to: '/products/1', label: 'Product 1', param: 'id = 1' },
  { to: '/products/2', label: 'Product 2', param: 'id = 2' },
  { to: '/products/3', label: 'Product 3', param: 'id = 3' },
];
</script>

<template>
  <div class="page_container">
    <div class="page_header">
      <h1 class="page_header__title">Welcome to Nuxt Lab</h1>
      <p class="page_header__subtitle">
        A hands-on playground to learn Vue 3 and Nuxt through interactive examples
      </p>
    </div>

    <div class="concept_card">
      <span class="concept_card__badge">Home</span>
      <h2 class="concept_card__title">Explore Vue & Nuxt Concepts</h2>
      <p class="concept_card__description">
        Each card below demonstrates a specific Vue 3 or Nuxt feature.
        Click on any example to see it in action with a live interactive demo.
      </p>
    </div>

    <!-- Vue 3 Fundamentals -->
    <section class="home_section">
      <h3 class="home_section__title">Vue 3 Fundamentals</h3>
      <p class="home_section__subtitle">Core reactivity, directives, lifecycle & patterns</p>
      <div class="topic_grid">
        <NuxtLink
          v-for="topic in vueTopics"
          :key="topic.to"
          :to="topic.to"
          class="topic_card"
        >
          <div class="topic_card__icon_wrap" :style="{ backgroundColor: topic.color }">
            <component :is="topic.icon" :size="20" class="topic_card__icon" />
          </div>
          <div class="topic_card__content">
            <h4 class="topic_card__title">
              {{ topic.title }}
              <ArrowRight :size="14" class="topic_card__arrow" />
            </h4>
            <p class="topic_card__description">{{ topic.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Nuxt Features -->
    <section class="home_section">
      <h3 class="home_section__title">Nuxt Features</h3>
      <p class="home_section__subtitle">Routing, data fetching & framework magic</p>
      <div class="topic_grid">
        <NuxtLink
          v-for="topic in nuxtTopics"
          :key="topic.to"
          :to="topic.to"
          class="topic_card"
        >
          <div class="topic_card__icon_wrap" :style="{ backgroundColor: topic.color }">
            <component :is="topic.icon" :size="20" class="topic_card__icon" />
          </div>
          <div class="topic_card__content">
            <h4 class="topic_card__title">
              {{ topic.title }}
              <ArrowRight :size="14" class="topic_card__arrow" />
            </h4>
            <p class="topic_card__description">{{ topic.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Dynamic Route Examples -->
    <section class="home_section">
      <h3 class="home_section__title">Dynamic Route Examples</h3>
      <p class="home_section__subtitle">Try different [id] parameters in action</p>
      <div class="route_chips">
        <NuxtLink
          v-for="route in dynamicRoutes"
          :key="route.to"
          :to="route.to"
          class="route_chip"
        >
          <Route :size="14" />
          <span class="route_chip__label">{{ route.label }}</span>
          <span class="route_chip__param">{{ route.param }}</span>
          <ArrowRight :size="12" class="route_chip__arrow" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home_section {
  margin-bottom: var(--space_2xl);

  &__title {
    font-size: var(--font_size_xl);
    font-weight: var(--font_weight_bold);
    margin-bottom: var(--space_xs);
  }

  &__subtitle {
    font-size: var(--font_size_sm);
    color: var(--color_text_light);
    margin-bottom: var(--space_lg);
  }
}

.topic_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space_md);
}

.topic_card {
  display: flex;
  align-items: flex-start;
  gap: var(--space_md);
  padding: var(--space_lg);
  background-color: var(--color_bg_card);
  border: 1px solid var(--color_border);
  border-radius: var(--border_radius_lg);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition_base);

  &:hover {
    border-color: var(--color_primary);
    box-shadow: var(--shadow_md);
    transform: translateY(-2px);

    .topic_card__arrow {
      opacity: 1;
      transform: translateX(4px);
    }
  }

  &__icon_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--size_icon_md);
    height: var(--size_icon_md);
    border-radius: var(--border_radius_md);
    flex-shrink: 0;
  }

  &__icon {
    color: var(--color_text_inverse);
  }

  &__content {
    flex: 1;
    min-width: 0;
  }

  &__title {
    display: flex;
    align-items: center;
    gap: var(--space_sm);
    font-size: var(--font_size_base);
    font-weight: var(--font_weight_semibold);
    color: var(--color_text);
    margin-bottom: var(--space_xs);
  }

  &__arrow {
    opacity: 0;
    transition: all var(--transition_base);
    color: var(--color_primary);
    flex-shrink: 0;
  }

  &__description {
    font-size: var(--font_size_sm);
    color: var(--color_text_light);
    line-height: var(--line_height_tight);
  }
}

.route_chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space_sm);
}

.route_chip {
  display: inline-flex;
  align-items: center;
  gap: var(--space_sm);
  padding: var(--space_sm) var(--space_lg);
  background-color: var(--color_bg_card);
  border: 1px solid var(--color_border);
  border-radius: var(--border_radius_full);
  text-decoration: none;
  color: var(--color_text);
  font-size: var(--font_size_sm);
  transition: all var(--transition_fast);

  &:hover {
    border-color: var(--color_secondary);
    background-color: var(--color_secondary_light);
    color: var(--color_text);

    .route_chip__arrow {
      transform: translateX(3px);
    }
  }

  &__label {
    font-weight: var(--font_weight_medium);
  }

  &__param {
    color: var(--color_text_light);
    font-family: var(--font_family_mono);
    font-size: var(--font_size_xs);
  }

  &__arrow {
    color: var(--color_text_light);
    transition: transform var(--transition_fast);
  }
}
</style>
