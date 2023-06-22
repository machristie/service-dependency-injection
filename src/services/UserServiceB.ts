import type User from '@/types/User'
import type UserService from './UserService'

export default class UserServiceA implements UserService {
  getAll(): User[] {
    return [
      {
        firstName: 'Barbara',
        lastName: 'Babbage',
        email: 'bbabbage@example.com'
      },
      {
        firstName: 'Bob',
        lastName: 'Bates',
        email: 'bbates@example.com'
      },
      {
        firstName: 'Brad',
        lastName: 'Bennett',
        email: 'bbennett@example.com'
      }
    ]
  }
}
