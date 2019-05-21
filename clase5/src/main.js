import Vue from "vue";
import VueForm from "vue-form";

import App from './App.vue';


import store from './store.js';
import router from './router.js';


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var options = {
  validators: {
    'no-espacios': function (value, attrValue, vnode) {
      return value.indexOf(' ') < 0;//value === 'custom';
    }
  }
}
//Vue.use(VueForm);
Vue.use(VueForm, options);
Vue.use(router);
Vue.use(store);



console.log(router);


Vue.config.productionTip = false;

new Vue({
  router, //router: router -> ES6
  store,
  render: h => h(App)
}).$mount("#app");
