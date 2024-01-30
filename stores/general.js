// stores/counter.js
import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    isAuthOpen : false,
    isLinkDetailsOpen : false,
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    
  },
  persist:true
})