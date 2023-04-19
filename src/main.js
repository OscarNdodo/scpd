import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import style from "./assets/css/style.css"
import icons from "./assets/icons/icon/font-awesome.css"

createApp(App)
	.use(store)
	.use(router)
	.use(style)
	.use(icons)
		.mount('#app')
