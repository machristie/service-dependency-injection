import { UserServiceKey } from '@/types/InjectionKeys'
import type User from '@/types/User'
import { defineStore } from 'pinia'
import { inject, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>()
  const userService = inject(UserServiceKey)
  async function loadUsers() {
    users.value = userService?.getAll()
  }
  return {
    users,
    loadUsers
  }
})
