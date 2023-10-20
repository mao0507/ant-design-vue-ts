import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSideBarStore = defineStore('sidebar', {
  state: () => {
    return {
      display: ref<Boolean>(false),
    }
  },
  actions: {
    switchDisplay() {
      this.display = !this.display
    },
  },
})
