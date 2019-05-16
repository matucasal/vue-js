<template>

  <div class="jumbotron" :style="{'backgroundColor': colorFondo,'color': colorTexto}">
    <h1>Soy http</h1>
    <button @click='getUsuarios()'>GET</button>
    <button @click='postUsuario()'>POST</button>

    <pre> {{ usuarios }} </pre>

  </div>


</template>

<script>
  import axios from 'axios';
  export default  {
    name: 'Http',
    props: ['colorFondo','colorTexto'],
    data() {
      return {
        usuarios: []
      }
    },

    //Sirve para hokear
    //Esto fue con fetch
    /*created() {
      let url = 'http://5cdd71f1b22718001417c7fe.mockapi.io/users'
      let $this = this;
      
      fetch(url).then(function(response) {
        return response.json();
      })
      .then(json => {      
        this.usuarios = json
      }) 

    },*/
    
    methods: {
      //con axios
      getUsuarios(){
        let url = 'http://5cdd71f1b22718001417c7fe.mockapi.io/users'
        axios.get(url).then (data => {
          this.usuarios = data;
        })
      },
      putUsuarios (){

      },

      deleteUsuarios(){},

      postUsuario(){
        let url = 'http://5cdd71f1b22718001417c7fe.mockapi.io/users'
        let usuario = {
            createdAt: "2019-05-16T06:07:06.836Z",
            name: "Prueba",
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/charliecwaite/128.jpg"
        }

        axios.post (url, usuario, {
          'Content-Type' : 'application/json'
        }).then (res => {
          console.log(res);
          this.getUsuarios();
        } )

      }
    },
    computed: {

    }
}
</script>

<style>
  .src-componentes-http {

  }
</style>
