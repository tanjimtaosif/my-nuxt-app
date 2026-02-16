<script setup>
import { ref } from "vue";

useHead({ title: 'To-Do List' });

const newTask = ref("");
const tasks = ref([]);

function addTask() {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value.trim());
    newTask.value = "";
  }
}

function removeTask(index) {
  tasks.value.splice(index, 1);
}
</script>

<template>
  <div class="page_container">
    <div class="page_header">
      <h1 class="page_header__title">To-Do List</h1>
      <p class="page_header__subtitle">
        A simple task manager built with Vue directives
      </p>
    </div>

    <div class="concept_card">
      <span class="concept_card__badge">Vue 3 Directives</span>
      <h2 class="concept_card__title">v-model, v-for, v-if &amp; Event Handling</h2>
      <p class="concept_card__description">
        This to-do list demonstrates two-way data binding with v-model,
        list rendering with v-for, conditional rendering with v-if/v-else,
        and event handling with @click. The :disabled binding prevents adding empty tasks.
      </p>
    </div>

    <div class="demo_area">
      <div class="todo_form">
        <input
          v-model="newTask"
          type="text"
          class="input"
          placeholder="What needs to be done?"
          @keyup.enter="addTask"
        />
        <button class="btn btn--primary" :disabled="newTask.trim() === ''" @click="addTask">
          Add Task
        </button>
      </div>

      <div class="todo_counter">
        <span class="badge badge--info">{{ tasks.length }} task{{ tasks.length !== 1 ? 's' : '' }}</span>
      </div>

      <div v-if="tasks.length === 0" class="task_list__empty">
        No tasks added yet. Type something above and press Enter!
      </div>

      <div v-else class="task_list">
        <div v-for="(task, index) in tasks" :key="index" class="task_list__item">
          <span class="task_list__number">{{ index + 1 }}</span>
          <span class="task_list__text">{{ task }}</span>
          <button class="btn btn--danger btn--sm" @click="removeTask(index)">Remove</button>
        </div>
      </div>
    </div>

    <NuxtLink to="/" class="back_link">Back to Home</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.todo_form {
  display: flex;
  gap: var(--space_sm);
  margin-bottom: var(--space_md);

  .input {
    flex: 1;
  }
}

.todo_counter {
  margin-bottom: var(--space_lg);
}
</style>
