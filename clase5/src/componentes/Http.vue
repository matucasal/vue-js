<template>

  <div class="jumbotron" :style="{'backgroundColor': colorFondo,'color': colorTexto}">
    <h2>Http Component</h2>
    <hr>
    <div class="my-5"></div>
    <button class="btn btn-primary mx-3" @click="getUsuariosAxios()">GET</button>
    <button class="btn btn-success mx-3" @click="postUsuarioAxios()">POST</button>
    <div class="my-5"></div>
    <!-- <pre style="color: white;">{{ usuarios }}</pre> -->

    <div v-if="cargando">
      <h3>CARGANDO USUARIOS...</h3>
    </div>
    <div v-else-if="usuarios.length">
      <div class="media my-4" v-for="(usuario, index) in usuarios" :key="index">
        <img :src="usuario.foto" height="120" style="border-radius: 50%;" :alt="usuario.nombre">
        <div class="media-body ml-3">
          <p><b>{{ usuario.nombre }}</b></p>
          <p><i>{{ usuario.descripcion }}</i></p>
          <button class="btn btn-danger mx-3" @click="deleteUsuarioAxios(usuario.id)">DELETE</button>
          <button class="btn btn-warning mx-3" @click="updateUsuarioAxios(usuario.id)">PUT</button>
          <hr>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import axios from 'axios';
  export default  {
    name: 'Http',
    props: ['colorFondo','colorTexto'],
   
    //hook componente creado
    beforeCreate() {
      console.log('beforeCreate');
    },
    created() {
      //this.getUsuarios();
      console.log('created');
    },

    //hook componente montado
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      //this.getUsuarios();
      console.log('mounted');
    },

    //hook componente actualizado
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      //this.getUsuarios();
      console.log('updated');
    },

    //hook componente destruido
    beforeDestroy() {
      console.log('beforeDestroy');
    },
    destroyed() {
      //this.getUsuarios();
      console.log('destroyed');
    },


    data() {
      return {
        usuarios : [],
        cargando : false

      }
    },
    methods: {
      // ------- AXIOS -----------------
      getUsuariosAxios() {
        this.cargando = true;
        let url = 'https://5c8ef17a3e557700145e85c7.mockapi.io/usuarios';
        axios.get(url)
        .then( res => {
          this.cargando = false;
          console.log(res.data);
          this.usuarios = res.data;
        })
      },
      postUsuarioAxios() {
        let url = 'https://5c8ef17a3e557700145e85c7.mockapi.io/usuarios';
        let usuario = {
          nombre: "Pedro",
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png",
          descripcion: "Alumno Vue.js"
        };

        axios.post(url, usuario, {
          'Content-Type': 'application/json'
        })
        .then( res => {
          console.log(res.data);
          this.getUsuarios();
        })
      },
      deleteUsuarioAxios(id) {
        let url = 'https://5c8ef17a3e557700145e85c7.mockapi.io/usuarios/' + id;

        axios.delete(url, {
          'Content-Type': 'application/json'
        })
        .then( res => {
          console.log(res.data);
          this.getUsuarios();
        })

      },
      updateUsuarioAxios(id) {
        let url = 'https://5c8ef17a3e557700145e85c7.mockapi.io/usuarios/' + id;
        let usuario = {
          nombre: "Ana",
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png",
          descripcion: "Alumna Vue.js"
        };

       axios.put(url, usuario, {
          'Content-Type': 'application/json'
        })
        .then( res => {
          console.log(res.data);
          this.getUsuarios();
        })
      },
      // ------- FETCH -----------------
      getUsuarios() {
        this.cargando = true;
        let url = 'https://5c8ef17a3e557700145e85c7.mockapi.io/usuarios';
        fetch(url)
        .then( res => res.json() )
        .then( data => {
          this.cargando = false;
          console.log(data);
          this.usuarios = data;
        })
      },
      postUsuario() {
        let url = 'https://5c8ef17a3e557700145e85c7.mockapi.io/usuarios';
        let usuario = {
          nombre: "Pedro",
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png",
          descripcion: "Alumno Vue.js"
        };

        fetch(url,{
          method: 'POST',
          body: JSON.stringify(usuario),
          headers : {
            'Content-Type': 'application/json'
          }
        })
        .then( res => res.json() )
        .then( data => {
          console.log(data);
          this.getUsuarios();
        })
      },
      deleteUsuario(id) {
        let url = 'https://5c8ef17a3e557700145e85c7.mockapi.io/usuarios/' + id;

        fetch(url,{
          method: 'DELETE',
          body: null,
          headers : {
            'Content-Type': 'application/json'
          }
        })
        .then( res => res.json() )
        .then( data => {
          console.log(data);
          this.getUsuarios();
        })

      },
      updateUsuario(id) {
        let url = 'https://5c8ef17a3e557700145e85c7.mockapi.io/usuarios/' + id;
        let usuario = {
          nombre: "Ana",
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png",
          descripcion: "Alumna Vue.js"
        };

        fetch(url,{
          method: 'PUT',
          body: JSON.stringify(usuario),
          headers : {
            'Content-Type': 'application/json'
          }
        })
        .then( res => res.json() )
        .then( data => {
          console.log(data);
          this.getUsuarios();
        })
      }

    },
    computed: {
    }
}
</script>

<style scoped>
  hr {
    background-color: blue;
  }
</style>
