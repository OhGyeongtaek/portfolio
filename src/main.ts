import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrap from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import { BIcon, BIconArrowUp, BIconArrowDown, BootstrapVueIcons } from 'bootstrap-vue';

Vue.component('BIcon', BIcon);
Vue.component('BIconArrowUp', BIconArrowUp);
Vue.component('BIconArrowDown', BIconArrowDown);

Vue.use(bootstrap);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
