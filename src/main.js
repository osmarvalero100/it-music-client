import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

// Icons: vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faFastForward, faPlusSquare, faAngry, faHeart, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faFastForward, faPlusSquare, faAngry, faHeart, faTrashAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
