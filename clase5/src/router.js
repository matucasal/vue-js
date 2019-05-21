import VueRouter from 'vue-router';
import Vue from 'vue';

import Formulario from './componentes/Formulario.vue';
import FormularioVue from './componentes/FormularioVue.vue';
import Http from './componentes/Http.vue';
import Panel from './componentes/Panel.vue';
import Contador from './componentes/Contador/index.vue'


Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes : [
    {path: '/panel/:id/:colorFondo/:colorTexto', component: Panel, props: true},
    {path: '/form/:colorFondo/:colorTexto', component: Formulario, props: true},
    {path: '/formvue/:colorFondo/:colorTexto', component: FormularioVue, props: true},
    {path: '/http/:colorFondo/:colorTexto', component: Http, props: true},
    {path: '/contador', component: Contador}
  ]
})