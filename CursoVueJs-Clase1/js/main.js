const app = new Vue(
    {
        //El me dice con que id del html se conecta
        el: '#app',
        //aca se alamcen los datos que se almacena en el elemento
        data: {
            mensaje: 'Hola VueJS',
            mensajeHTML: '<p style= "color:red;">Hola VueJS</p>',
            mostrar: false,
            //usuarios: ['Pedro','Juan','Ana','Laura']
            //ahora array de objetos
            usuarios: 
            [
                {nombre:'Pedro', apellido:'Gomez', curso:false, edad: 32, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png'},
                {nombre:'Mariano', apellido:'Perez', curso:true, edad: 21, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png'},
                {nombre:'Matias', apellido:'Martinez', curso:false, edad: 29, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png'},
                {nombre:'Sofia', apellido:'Lopez', curso:true, edad: 21, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png'},
            ]
        },
        methods: {
            //Diferentes formas de llamar metodos
            cambiarVistaTexto1 : function () {
                this.mostrar=!this.mostrar
            },

            borrarUsuario : function (index) {
                //Saca un elemento del array (splice (indice, cuantos))
                this.usuarios.splice(index,1);
            },

            cambiarVistaTexto2() {
            }
        }
    }
)