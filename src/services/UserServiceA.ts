import type User from '@/types/User'
import type UserService from './UserService'

export default class UserServiceA implements UserService {
  getAll(): User[] {
    return [
      {
        firstName: 'Ann',
        lastName: 'Armstrong',
        email: 'aarmstro@example.com'
      },
      {
        firstName: 'Alex',
        lastName: 'Applegate',
        email: 'alexappl@example.com'
      },
      {
        firstName: 'Arnold',
        lastName: 'Avanoff',
        email: 'arnavano@example.com'
      }
    ]
  }
}
