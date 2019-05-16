import Vue from "vue";
import VueForm from "vue-form";
import App from './App.vue';
import VueRouter from 'vue-router';
import Formulario from './componentes/Formulario';
import FormularioVue from './componentes/FormularioVue';
import Http from './componentes/Http';

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

Vue.use(VueRouter);

const router =new VueRouter({
  mode: 'history',
  routes: [
    {path: '/form/:colorFondo/:colorTexto' , component: Formulario, props:true},
    {path: '/form-vue' , component: FormularioVue},
    {path: '/http' , component: Http},
  ]
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
