import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import UserServiceA from './services/UserServiceA'
import { UserServiceKey } from './types/InjectionKeys'
import UserServiceB from './services/UserServiceB'

const app = createApp(App)

app.provide(UserServiceKey, new UserServiceA())
// app.provide(UserServiceKey, new UserServiceB())

app.use(createPinia())

app.mount('#app')
