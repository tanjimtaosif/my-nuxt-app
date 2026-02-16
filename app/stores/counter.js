import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    // State, getters, actions
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
})
