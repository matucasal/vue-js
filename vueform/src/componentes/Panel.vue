<template>

  <!-- Crtl d selecciona todos-->
  <!-- en el section class poner el nombre del componente-->
  <!--<div class="jumbotron" :style="{'backgroundColor' : 'blue', 'color' : 'white'}">-->
    <!-- va el this porque encapsula el compoentne-->
    <div class="jumbotron" :style="{'backgroundColor' : this.colorFondo, 'color' : this.colorTexto}">
    <h1>Panel Component</h1>
    {{id}} {{colorFondo}} {{colorTexto}}
    <div v-if="this.id==1"> 
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </div>

    <div v-else-if="this.id==2"> 
      <li>a1</li>
      <li>a2</li>
      <li>a3</li>
      <li>a4</li>
    </div>
    
  </div>

</template>

<script>
  export default  {
    name: 'Panel',
    props: ['colorFondo', 'colorTexto','id'],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<!-- Styles-->
<style>
  .Panel {

  }
</style>
