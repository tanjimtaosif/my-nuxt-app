# Nuxt Lab — Vue 3 & Nuxt 4 Learning Playground

> **Nuxt Lab** is a comprehensive, hands-on learning project designed to demonstrate core **Vue 3** concepts and **Nuxt 4** features. It serves as an interactive documentation and playground for developers looking to understand modern Vue development patterns.

---

## 🚀 Project Overview

This application is built with:
- **Framework**: [Nuxt 4](https://nuxt.com/) (Vue 3 Meta-Framework)
- **UI Architecture**: Component-based with Scoped SCSS & BEM Methodology
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Styling system**: CSS Variables & Custom SCSS Architecture
- **Iconography**: [Lucide Vue Next](https://lucide.dev/guide/packages/lucide-vue-next)
- **SEO**: Built-in Nuxt Meta Tags (`useHead`)

---

## 🛠️ Installation & Setup

Ensure you have [Node.js](https://nodejs.org/) installed.

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
pnpm run start
```

---

## 📚 Topics Covered

### 1. Vue 3 Reactivity System
Located in: `pages/reactive.vue`

Vue 3 introduced a new reactivity system based on ES6 Proxies. We explore the core APIs:

- **`ref()`**: Used for reactive primitive values (strings, numbers, booleans). Access via `.value` in script, direct use in template.
- **`reactive()`**: Used for reactive distinct objects. Access properties directly.
- **`computed()`**: Derived state that automatically updates when dependencies change.
- **`watch()`**: Side effects that run when a reactive source changes.

**Example:**
```javascript
const name = ref("Nuxt User"); // ref
const cart = reactive({ items: [], total: 0 }); // reactive

const isCartFull = computed(() => cart.items.length > 5); // computed

watch(name, (newVal) => {
  console.log(`Name changed to: ${newVal}`); // watch
});
```

### 2. Lifecyle Hooks
Located in: `pages/life-cycle.vue`

Understanding the component lifecycle is crucial for managing side effects, API calls, and DOM manipulation.

- **`onMounted`**: Component is inserted into the DOM. Ideally used for API calls or third-party library initialization.
- **`onUpdated`**: Component has re-rendered due to reactive state changes.
- **`onBeforeUnmount`**: Cleanup logic (removing event listeners, clearing intervals) before component destruction.

**Example:**
```javascript
import { onMounted, onBeforeUnmount } from 'vue';

onMounted(() => {
  console.log('Component is now visible!');
});
```

### 3. Composables (Reusable Logic)
Located in: `pages/compose.vue`

Nuxt auto-imports composables from the `composables/` directory. This pattern replaces Mixins, allowing you to extract reusable stateful logic into clean functions.

**Example from `composables/useCounter.js`:**
```javascript
export const useCounter = () => {
    const count = ref(0);
    const increment = () => count.value++;
    const decrement = () => count.value--;
    return { count, increment, decrement };
}
```

### 4. Directives & Event Handling
Located in: `pages/list.vue`

Standard Vue directives for DOM manipulation and logic.

- **`v-for`**: Render lists based on arrays.
- **`v-if` / `v-else`**: Conditionally render elements.
- **`v-model`**: Two-way data binding for form inputs.
- **`@click`**: Event listener for click events.

---

## ⚡ Nuxt Features

### 1. Data Fetching
Located in: `pages/hook.vue`

Nuxt provides powerful composables for server-side data fetching. `useAsyncData` prevents hydration mismatches and handles SSR correctly.

**Example:**
```javascript
// Fetch data on the server, send serialized HTML to client
const { data, status } = await useAsyncData('posts', () => 
  $fetch('https://jsonplaceholder.typicode.com/posts/1')
);
```

### 2. State Management (Pinia)
Located in: `pages/pinia.vue` | Store: `stores/counter.js`

Nuxt automatically imports stores defined in `stores/`. Pinia stores are modular and type-safe.

**Store Definition:**
```javascript
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() { this.count++ }
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  }
});
```

### 3. Routing System
Nuxt uses file-system based routing, meaning your file structure dictates the URL paths.

- **Basic Routes**: `pages/contact.vue` ➝ `/contact`
- **Dynamic Routes**: `pages/products/[id]/index.vue` ➝ `/products/123`. Access params via `useRoute().params.id`.
- **Nested Routes**: `pages/blogs/index.vue` ➝ `/blogs`. `pages/blogs/nuxt.vue` ➝ `/blogs/nuxt`.
- **Catch-All Routes**: `pages/blogs/[...slug].vue` catches any unmatched nested path like `/blogs/category/2024/post-name` useful for 404s or dynamic content.

### 4. Layouts
Defined in `layouts/` directory. Used to wrap pages with common UI like Headers/Footers.

- **`default.vue`**: Applied automatically to all pages unless specified otherwise.
- **`admin.vue`**: Custom layout with a dedicated sidebar for admin pages.
- **Usage**: `definePageMeta({ layout: 'admin' })` in page component.

### 5. SEO & Meta Tags
Nuxt provides `useHead` for managing document head tags programmatically.

**Example:**
```javascript
useHead({
  title: 'My Page Title',
  meta: [
    { name: 'description', content: 'Page description here' }
  ]
});
```

### 6. Lazy Loading Components
Located in: `pages/products/reviews.vue`

Nuxt supports lazy loading components to reduce initial bundle size. Use standard `defineAsyncComponent` or Nuxt's auto-import prefix `Lazy` (e.g., `<LazyReviewSection />`).

---

## 🎨 SCSS Architecture & Design System

The project uses a structured SCSS methodologies with **BEM (Block Element Modifier)** naming convention and **CSS Variables** for consistent theming.

### 1. Design Tokens (`assets/scss/_variables.scss`)
All design values (colors, spacing, typography, z-indices) are stored as CSS Custom Properties in the `:root`. This allows for easy theming and dark mode support.

```scss
:root {
  --color_primary: rgb(59, 130, 246);
  --space_md: 1rem;
  --font_family_mono: 'Courier New', monospace;
}
```

### 2. Base Styles (`assets/scss/_base.scss`)
Contains global resets, typography defaults, and reusable utility classes like `.page_container`, `.card`, `.btn`, and form elements.

### 3. Usage
Styles are globally imported via `nuxt.config.ts`:
```typescript
export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
})
```

---

## 📂 Project Structure

```
├── app/
│   ├── assets/            # SCSS files (variables, base styles)
│   ├── components/        # Reusable Vue components (ReviewSection.vue)
│   ├── composables/       # Auto-imported logic (useCounter.js)
│   ├── layouts/           # Layout wrappers (default.vue, admin.vue)
│   ├── pages/             # Application routes & views
│   │   ├── blogs/         # Nested routes example
│   │   ├── products/      # Dynamic routes example
│   │   ├── admin.vue      # Uses custom layout
│   │   └── index.vue      # Home page
│   ├── stores/            # Pinia stores (counter.js)
│   └── app.vue            # Root component
├── public/                # Static assets
├── nuxt.config.ts         # Nuxt configuration
└── package.json           # Dependencies & scripts
```

---

© 2026 Nuxt Lab. Built for learning purposes.
