import type UserService from './UserService'

export default class UserServiceA implements UserService {
  getAll() {
    return Promise.resolve([
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
    ])
  }
}
