import type User from '@/types/User'

export default interface UserService {
  getAll(): User[]
}
