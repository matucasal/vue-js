export default {

    //funciones que retornaban
    //va a retornar la lectura del store
    computed: {
        contador () {
            //$ -> llega a la "variable global" que configure en el main.js. Sirve para lelgar a variables globales
            return this.$store.state.contador;
        }
    }

}
 