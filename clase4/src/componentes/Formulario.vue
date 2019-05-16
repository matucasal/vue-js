<template>

  <div class="jumbotron" :style="{'backgroundColor': colorFondo,'color': colorTexto}">
    <h2>Formulario Component</h2>
    
    <form class="form-group" @submit.prevent="enviar()" novalidate>
      Nombre: <br>
      <input class="form-control" type="text" name="nombre" v-model.trim="formdatos.nombre.dato" @input="formdatos.nombre.dirty=true">
      <div class="alert alert-danger my-1" v-if="!formdatos.nombre.dato && formdatos.nombre.dirty">
        Se requiere el campo nombre
      </div>
      <br>

      Apellido: <br>
      <input class="form-control" type="text" name="apellido" v-model.trim="formdatos.apellido.dato" @input="formdatos.apellido.dirty=true">
      <div class="alert alert-danger my-1" v-if="!formdatos.apellido.dato && formdatos.apellido.dirty">
        Se requiere el campo apellido
      </div>
      <br>

      Edad: <br>
      <input class="form-control" type="number" name="edad" v-model.number="formdatos.edad.dato" @input="formdatos.edad.dirty=true">
      <div class="alert alert-danger my-1" v-if="!formdatos.edad.dato && formdatos.edad.dirty">
        Se requiere el campo edad
      </div>
      <br>

      Email: <br>
      <input class="form-control" type="email" name="email" v-model="formdatos.email.dato" @input="formdatos.email.dirty=true">
      <div class="alert alert-danger my-1" v-if="!formdatos.email.dato && formdatos.email.dirty">
        Se requiere el campo email
      </div>
      <br>

      <br>
      <input class="btn btn-success" type="submit" value="Enviar"> <br>
    </form>

    <!-- <pre>{{ formdatos }} </pre> -->
  </div>

</template>

<script>
  export default  {
    name: 'Formulario',
    props: ['colorFondo','colorTexto'],
    mounted() {
    },
    data() {
      return {
        formdatos : this.getInicialData(),
      }
    },
    methods: {

      getInicialData() {
        return { 
          nombre: {
            dato: '',
            dirty: false
          },
          apellido: {
            dato: '',
            dirty: false
          },
          edad: {
            dato: '',
            dirty: false
          },
          email: {
            dato: '',
            dirty: false
          }
        }
      },

      enviar() {
        console.log(this.formdatos);
        this.formdatos = this.getInicialData();
      }
    },
    computed: {

    }
}
</script>

<style scoped>
  .Formulario {

  }
</style>
