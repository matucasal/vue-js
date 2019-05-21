<template>
  <div id="app">
    <div class="container">
      <div class="jumbotron my-3">
        <h1 class="text-center">App Component</h1>
        <div class="my-5"></div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <router-link to="/">
            <a class="navbar-brand" href="#">Home</a>
          </router-link>
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/panel/1/green/white" tag="li">
                  <a class="nav-link" href="#">Panel 1</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/panel/2/red/white" tag="li">
                  <a class="nav-link" href="#">Panel 2</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/panel/3/blue/white" tag="li">
                  <a class="nav-link" href="#">Panel 3</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/panel/4/orange/brown" tag="li">
                  <a class="nav-link" href="#">Panel 4</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/form/teal/white" tag="li">
                  <a class="nav-link" href="#">Formulario</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/formvue/purple/white" tag="li">
                  <a class="nav-link" href="#">Formulario Vue</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/http/orange/brown" tag="li">
                  <a class="nav-link" href="#">HTTP</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contador" tag="li">
                  <a class="nav-link" href="#">Contador</a>
                </router-link>
              </li>

            </ul>
          </div>
        </nav>
        <div class="my-4"></div>

        <router-view></router-view>

        <!--
        <Http colorFondo="purple" colorTexto="white" />

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
            <Formulario colorFondo="teal" colorTexto="white" />
           </div>
          <div class="col-6">
            <FormularioVue colorFondo="purple" colorTexto="white" />
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
import Http from "./componentes/Http.vue";
import Contador from "./componentes/Contador/index.vue";

export default {
  name: "app",
  components: {
    Panel,
    Formulario,
    FormularioVue,
    Http,
    Contador
  }
};
</script>

<style>
</style>
