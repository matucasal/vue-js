//Instancia todas las cosas princpales de la vista!

import Vue from "vue";
import VueForm from "vue-form";
import App from "./App.vue";
//Aca importamos bootstrap
import 'bootstrap';
//Aca importamos el archivo de importacion -> paquete donde esta el min.css principal del boot
import 'bootstrap/dist/css/bootstrap.min.css';


//Le agrego el vue form para que lo use vue
Vue.use(VueForm);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
