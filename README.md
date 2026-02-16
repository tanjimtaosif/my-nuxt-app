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

**Why Use It:**
- Reactivity allows your UI to automatically update when data changes, without manual DOM manipulation.
- `computed` properties cache values, improving performance by only re-calculating when dependencies change.

**When to Use:**
- Use `ref()` for simple values like `count` or `isVisible`.
- Use `reactive()` for grouping related state, like a `form` object (e.g., `{ name: '', email: '' }`).
- Use `computed()` for filtering lists or formatting data (e.g., `fullName` from `firstName` + `lastName`).
- Use `watch()` for side effects like API calls when a filter changes, or logging.

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

- **`onMounted`**: Component is inserted into the DOM.
- **`onUpdated`**: Component has re-rendered due to reactive state changes.
- **`onBeforeUnmount`**: Cleanup logic before component destruction.

**Why Use It:**
- To control exactly _when_ code runs during a component's existence.
- To prevent memory leaks by cleaning up listeners or timers when a component is removed.

**When to Use:**
- **`onMounted`**: For fetching initial data, setting up WebSocket connections, or integrating 3rd-party libraries (charts, maps) that need the DOM.
- **`onUpdated`**: For debugging re-renders or syncing with external DOM elements after an update.
- **`onBeforeUnmount`**: For clearing intervals/timeouts or removing global event listeners.

**Example:**
```javascript
import { onMounted, onBeforeUnmount } from 'vue';

onMounted(() => {
  console.log('Component is now visible!');
});
```

### 3. Composables (Reusable Logic)
Located in: `pages/compose.vue`

Nuxt auto-imports composables from the `composables/` directory.

**Why Use It:**
- **Reusability**: Write logic once, use it in multiple components.
- **Organization**: Keeps components clean by separating UI from business logic.
- **Composition**: You can combine multiple composables together.

**When to Use:**
- When you find yourself determining "how" to do something (e.g., tracking mouse position, managing a counter, fetching specific data) in multiple places.
- Instead of Mixins (Vue 2), which had issues with naming collisions and implicit dependencies.

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

**Why Use It:**
- Directives provide a declarative way to manipulate the DOM based on state.
- Reduces boilerplate compared to manual event listeners and DOM updates.

**When to Use:**
- **`v-for`**: Displaying lists of items (products, posts, messages).
- **`v-if`**: Toggling visibility of expensive components (modals, complex graphs) that shouldn't exist in the DOM when hidden.
- **`v-model`**: Handling form inputs (search bars, login forms).

---

## ⚡ Nuxt Features

### 1. Data Fetching
Located in: `pages/hook.vue`

Nuxt provides `useAsyncData` and `$fetch` for data fetching.

**Why Use It:**
- **SSR Support**: Fetches data on the server during initial load, improving SEO and performance.
- **Hydration**: Automatically transfers state from server to client, preventing "layout shift" or double-fetching.

**When to Use:**
- **`useAsyncData` / `useFetch`**: For page-level data needed for SEO (e.g., blog post content, product details).
- **`$fetch` (client-side)**: For user interactions after the page loads (e.g., submitting a form, loading more comments).

**Example:**
```javascript
// Fetch data on the server, send serialized HTML to client
const { data, status } = await useAsyncData('posts', () => 
  $fetch('https://jsonplaceholder.typicode.com/posts/1')
);
```

### 2. State Management (Pinia)
Located in: `pages/pinia.vue` | Store: `stores/counter.js`

**Why Use It:**
- **Global State**: Share data between completely unrelated components (e.g., Sidebar and Cart).
- **Persistence**: Keep state alive even when navigating between pages.
- **DevTools**: Time-travel debugging and state inspection.

**When to Use:**
- When `props` and `emit` become too messy (prop drilling).
- For User Sessions, Shopping Carts, Theme Settings, or Notification Systems.

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
Nuxt uses file-system based routing.

**Why Use It:**
- **Convention over Configuration**: No massive `router.js` file to maintain.
- **Automatic Splitting**: Each page is automatically code-split for performance.

**When to Use:**
- **Dynamic Routes (`[id]`)**: For resources with IDs (Products, Users).
- **Nested Routes**: For complex layouts with sub-views (e.g., Dashboard tabs, Blog categories).
- **Catch-All (`[...slug]`)**: For CMS integration or 404 pages.


### 4. Layouts
Defined in `layouts/` directory.

**Why Use It:**
- To share common UI (Header/Footer) across multiple pages without repeating code.
- To switch entire page structures easily (e.g., Public vs. Admin).

**When to Use:**
- **`default.vue`**: For your main marketing or app pages.
- **`admin.vue`**: For authenticated dashboards that need a Sidebar instead of a Top Nav.
- **`blank.vue`**: For login/signup pages or full-screen modals.

### 5. SEO & Meta Tags
Nuxt provides `useHead`.

**Why Use It:**
- Critical for correct indexing by Google/Bing and for social sharing cards (Open Graph).
- Enhances accessibility (lang attributes, titles).

**When to Use:**
- Use on **every page** to set a unique `<title>` and `<meta name="description">`.
- Use for dynamic content (e.g., setting the title to the Article's headline).

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

**Why Use It:**
- **Performance**: Reduces the initial JavaScript bundle size.
- **Speed**: The browser downloads the component code _only_ when it's actually needed.

**When to Use:**
- For heavy components below the fold (e.g., Footer, Reviews Section, Maps).
- For components hidden behind interaction (e.g., Modals, Drawers, Tabs).

---

## 🎨 SCSS Architecture & Design System

The project uses a structured SCSS methodologies with **BEM (Block Element Modifier)** naming convention and **CSS Variables**.

### 1. Design Tokens (`assets/scss/_variables.scss`)
All design values (colors, spacing, typography, z-indices) are stored as CSS Custom Properties.

**Why Use It:**
- **Consistency**: Ensures the exact same "Primary Blue" or "Spacing Medium" is used everywhere.
- **Maintainability**: Change a color in one file, and it updates across the entire app.
- **Theming**: Enables features like Dark Mode by simply swapping variable values.

**When to Use:**
- Always use variables (`var(--color-primary)`) instead of hardcoded values (`#3b82f6`).

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
