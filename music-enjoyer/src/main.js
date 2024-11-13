import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { projectAuth } from './firebase/config'

const app = createApp(App)
let isMounted = false; 

projectAuth.onAuthStateChanged(() => {
  if (!isMounted) {
    app.use(router).mount('#app')
    isMounted = true;
  }
})
