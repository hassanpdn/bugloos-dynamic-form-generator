import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', {
      state: () => ({
            user: '' as string
      })
})