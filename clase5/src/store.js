//Aca vamos a jugar con vuex
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//Exporto el vuex
export default new Vuex.Store({
    //state tiene los datos
    state:{
        contador: 500
    },
    //acciones llaman a las mutaciones
    //aca se puede trabajar asincronicamente con el estado
    actions:{
        contar({commit},paso){
            //aca se llama a la mutacion
            commit ('incrementar',paso);
        }
    },
    //aca solo se puede trabajar sincronicamente con el estado, por ej no permite fetchs
    mutations:{
        incrementar(state,paso){
            state.contador+= paso;
        }
    }
});