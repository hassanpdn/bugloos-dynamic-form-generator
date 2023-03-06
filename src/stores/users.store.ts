import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
      state: () => {
            return {
                  // for initially empty user
                  user: {} as UserInfo,
            }
      }
})

interface UserInfo {
      name: string
      age: number
}
