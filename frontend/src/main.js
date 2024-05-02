import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

// import vueAwesomeSidebar from 'vue-awesome-sidebar'
import 'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'

const app = createApp(App)
// app.use(vueAwesomeSidebar)

app.use(store)
app.use(router)

app.mount('#app')
