<!-- reemplazo todos los hellos worlds por Panel, tambien crtl-d para ir elegiendo todos-->
<!-- npm i bootstrap jquery popper.js Instala todas las librerias de bootstrap -->

<template>
  <div id="app">
    <div class="container">
      <div class="jumbotron">
        <h1>App component</h1>
        <div class="row">
          <div class="col-6">
            <Panel id="1" colorFondo ="green" colorTexto="white"/>
          </div>
          <div class="col-6">
            <Panel id="2" colorFondo ="red" colorTexto="green"/>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <Panel id="3" colorFondo ="black" colorTexto="yellow"/>
          </div>
          <div class="col-6">
            <Panel id="4" colorFondo ="purple" colorTexto="white"/>
          </div>
        </div>

      <!-- formulario -->
      <div class="row">
        <div class="col-12">
          <Formulario colorFondo ="black" colorTexto="white"/>
        </div>
      </div>

      
      <!-- formulario vue-->
      <div class="row">
        <div class="col-12">
          <FormularioVue colorFondo ="white" colorTexto="black"/>
        </div>
      </div>

      </div>
    </div>
  </div>
</template>

<script>
import Panel from "./componentes/Panel.vue";
import Formulario from "./componentes/Formulario.vue";
import FormularioVue from "./componentes/FormularioVue.vue";

export default {
  name: "app",
  components: {
    Panel,
    Formulario,
    FormularioVue
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
