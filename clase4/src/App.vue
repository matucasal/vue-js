<template>
  <div id="app">
    <div class="container">
      <div class="jumbotron my-3">
        <h1 class="text-center">App Component</h1>
        <div class="my-5"></div>


          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <router-link to="/form/red/white" tag="li">
                    <a class="nav-link" href="#">Formulario</a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/http" tag="li">
                    <a class="nav-link" href="#">Http</a>
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>

          <div class="my-4">
            <router-view></router-view>
          </div>


        <!--
            <Http colorFondo="green" colorTexto="white" />
        <div class="row">
          <div class="col-6">
            <Panel id="1" colorFondo="green" colorTexto="white" />
          </div>
          <div class="col-6">
            <Panel id="2" colorFondo="red" colorTexto="white" />
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <Panel id="3" colorFondo="orange" colorTexto="brown" />
          </div>
          <div class="col-6">
            <Panel id="4" colorFondo="purple" colorTexto="white" />
          </div>
        </div>

        <div class="row">
          <div class="col-6"> 
        -->
            
        <!--            
           </div>
          <div class="col-6">
        -->
            <!-- <Formulario colorFondo="teal" colorTexto="white" /> -->
            <!-- <FormularioVue colorFondo="purple" colorTexto="white" /> -->
            <!-- <Http colorFondo="purple" colorTexto="white" /> -->
        <!--
          </div>
        </div>
        -->

      </div>
    </div>
  </div>
</template>

<script>
import Panel from "./componentes/Panel.vue";
import Formulario from "./componentes/Formulario.vue";
import FormularioVue from "./componentes/FormularioVue.vue";
import Http from './componentes/Http.vue'

export default {
  name: "app",
  components: {
    Panel,
    Formulario,
    FormularioVue,
    Http
  }
};
</script>

<style>
</style>
