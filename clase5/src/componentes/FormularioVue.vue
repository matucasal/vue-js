<template>

  <div class="jumbotron" :style="{'backgroundColor': colorFondo,'color': colorTexto}">
    <h2>Formulario Vue Component</h2>

    <vue-form :state="formstate" @submit.prevent="enviar()">
  
      <validate tag="div">
        Nombre: <br>
        <input class="form-control" type="text" autocomplete="off" v-model="formdatos.nombre" required :maxlength="maxl" :minlength="minl" no-espacios name="nombre" />

          <field-messages name="nombre" show="$dirty">
              <!-- <div class="alert alert-danger my-1">Success!</div> -->
              <!-- <div class="alert alert-danger my-1">Caracteres restantes {{ maxl - formdatos.nombre.length}} </div> -->

              <div slot="no-espacios" class="alert alert-danger my-1">No se permiten espacios</div>
              <div slot="minlength" class="alert alert-danger my-1">Se debe entrar al menos {{minl}} caracteres</div>
              <div v-if="!(maxl - formdatos.nombre.length)" class="alert alert-danger my-1">Caracteres maximos alcanzados ({{maxl}}) </div>
              <div slot="required" class="alert alert-danger my-1">Campo nombre requerido</div>
          </field-messages>

      </validate>
      <br>
      <validate tag="div">
        Apellido: <br>
        <input class="form-control" autocomplete="off" type="text" v-model="formdatos.apellido" required name="apellido" />

          <field-messages name="apellido" show="$dirty">
              <!-- <div class="alert alert-danger my-1">Success!</div> -->
              <div slot="required" class="alert alert-danger my-1">Campo apellido requerido</div>
          </field-messages>

      </validate>
      <br>

      <validate tag="div">
        Edad: <br>
        <input class="form-control" autocomplete="off" type="number" min="1" max="140" v-model.number="formdatos.edad" required name="edad" />

          <field-messages name="edad" show="$dirty">
              <!-- <div class="alert alert-danger my-1">Success!</div> -->
              <div slot="number" class="alert alert-danger my-1">El campo edad debe ser numérico</div>
              <div slot="min" class="alert alert-danger my-1">Debe tener más que 1 año</div>
              <div slot="max" class="alert alert-danger my-1">No es un ser humano</div>
              <div slot="required" class="alert alert-danger my-1">Campo edad requerido</div>
          </field-messages>

      </validate>
      <br>

      <validate tag="div">
        Email: <br>
        <input class="form-control" autocomplete="off" v-model="formdatos.email" name="email" type="email" required />
  
        <field-messages name="email" show="$dirty">
          <!-- <div class="alert alert-danger my-1">Success!</div> -->
          <div slot="required" class="alert alert-danger my-1">Campo email requerido</div>
          <div slot="email" class="alert alert-danger my-1">El email no es valido</div>
        </field-messages>
      </validate>
      <br>
      <br>
      <button class="btn btn-success" type="submit">Enviar</button>
    </vue-form>
    <!-- <pre>{{ formstate }}</pre> -->

  </div>


</template>

<script>
  export default  {
    name: 'FormularioVue',
    props: ['colorFondo','colorTexto'],

    data() {
      return {
        formstate: {},
        formdatos: this.getInicialData(),
        minl : 3,
        maxl : 8
      }
    },
    methods: {
      
      getInicialData() {
        return { 
          nombre: '',
          apellido: '',
          edad: '',
          email: ''
        }
      },


      enviar: function () {
        if(this.formstate.$invalid) {
          // alert user and exit early
          alert('error de datos!');
          return;
        }

        console.log(this.formdatos);
        this.formdatos = this.getInicialData();
        this.formstate._reset();
      }
    },
    computed: {

    }
}
</script>

<style scoped>
</style>
