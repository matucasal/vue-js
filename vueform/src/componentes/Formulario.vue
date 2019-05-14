<template>

 <div class="jumbotron" :style="{'backgroundColor' : this.colorFondo, 'color' : this.colorTexto}">
   <h1>Formulario</h1>
   <!-- sumbito y agrego el prevent para que no llame al default del html y no recargue-->
   <!-- novalidate=true en el form le saca las validaciones del form de html 5 UTIL -->
   <form class="form-group" @submit.prevent="enviar()" novalidate="true" >
    Nombre: <br>
    <!-- v-model para el bind, conecta con un componente-->
    <!-- cuando hay un evneto pongo el dirty en true -->
    {{f.nombre.dato}}  {{f.nombre.dirty}}
    <input class="form-control" type="text" name="nombre" v-model.trim="f.nombre.dato" @input="f.nombre.dirty = true" /> <br>
    <!-- Valiaddaciones de javascript, no las html 5 --> 
    <div class="alert alert-danger" v-if="!f.nombre.dato && f.nombre.dirty == true">
      Se requiere el nombre
    </div>

    Apellido: <br>
    <!-- v-model para el bind, conecta con un componente-->
    <input class="form-control" type="text" name="apellido" v-model="f.apellido"/> <br>
    
    Edad: <br>
    <!-- v-model para el bind, conecta con un componente-->
    <!-- el .number lo parse a numero para el js despues -->
    <!-- tambien existe un .trim para sacar espacios -->
    <input class="form-control" type="number" name="edad" v-model.number="f.edad"/> <br>


    Email: <br>
    <!-- v-model para el bind, conecta con un componente-->
    <input class="form-control" type="email" name="email" v-model="f.email"/> <br>
    <input class="btn btn-success" type="submit" value="Enviar"/> <br>
   </form>
 </div>

</template>

<script>
  export default  {
    name: 'Formulario',
    props: ['colorFondo', 'colorTexto'],
    mounted() {

    },
    data() {
      return {
        f: {
          nombre: {dato: '', dirty: 'false'} ,
          apellido: '',
          edad: '',
          email: ''
        }
      }
    },
    methods: {
      enviar(){
        console.log(this.f);
      }

    },
    computed: {

    }
}
</script>

<style scoped>
  .src-componentes-formulario {

  }
</style>
