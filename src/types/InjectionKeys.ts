import type UserService from '@/services/UserService'
import type { InjectionKey } from 'vue'

export const UserServiceKey = Symbol() as InjectionKey<UserService>
