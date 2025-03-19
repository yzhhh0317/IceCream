import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(fas)
import './styles/reset.css'
import './styles/vars.css'  
import './styles/index.css' 
console.log(App.render?.toString());

createApp(App)
.mount('#app')
