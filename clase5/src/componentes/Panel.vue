<template>

<!--   <div class="jumbotron" :style="{'backgroundColor': 'blue','color': 'white'}"> -->
  <div class="jumbotron" :style="{'backgroundColor': colorFondo,'color': colorTexto}">
    <h2>Panel Component {{ id }}</h2>
    <!--     {{ colorFondo }}  {{ colorTexto }} -->
    <div v-if="this.id==1">
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
        <li>item5</li>
      </ul>
    </div>
    <div v-else-if="this.id==2">
      <ol>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
        <li>item5</li>
      </ol>
    </div>
    <div v-else-if="this.id==3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores nisi facere aut iure, molestiae fugiat. Accusantium sequi harum dolorem reprehenderit saepe suscipit rem ipsa omnis earum dolores, itaque beatae!
    </div>
    <div v-else>
      <i>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sit ducimus in sunt doloremque optio nulla iusto, accusamus, quis est impedit laboriosam libero molestiae eos earum quod similique quisquam iste?
      </i>
    </div>

  <button class="btn btn-success" @click="contar()">Contar: {{ contador }}</button>

  </div>

</template>

<script>

  import mixin from '../../mixin.js'

  export default  {
    name: 'Panel',
    props: ['colorFondo','colorTexto','id'],
    mixins: [mixin],
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    },
    
}
</script>

<style scoped>
  .Panel {

  }
</style>
