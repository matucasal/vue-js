import mixin from '../../../../../mixin.js'

export default {
  name: 'Contador',
  components: {},
  props: [],
  //mixins -> funciones distrubuias
  mixins: [mixin],
  data () {
    return {
      //contador: 123
    }
  },
  //funciones que retornaban
  //va a retornar la lectura del store
  /*
  //ahora esto lo hago con mixins
  computed: {
    contador () {
      //$ -> llega a la "variable global" que configure en el main.js. Sirve para lelgar a variables globales
      return this.$store.state.contador;
    }
  },*/
  mounted () {

  },
  methods: {
    contar(){
      //Esta llama a la accion del state --> este seria el camino asincroico
      this.$store.dispatch ('contar',3);
      //Esta llama a la mutacion del state --> este seria el camino sincroico
      //this.$store.commit('incrementar',2);
    }
  }
}
