const app = new Vue(
    {
        //El me dice con que id del html se conecta
        el: '#app',
        //aca se alamcen los datos que se almacena en el elemento
        data: {
            mensaje: 'Hola VueJS',
            mensajeHTML: '<p style= "color:red;">Hola VueJS</p>',
            mostrar: false
        }
    }
)