<template>
  <div>

    <form @submit.prevent="add(text)">
        <input v-model="text" type="text">
    </form>

    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Todos</h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="(todo, index) in todos" :key="index" class="flex items-center ph3 pv3 bb b--light-silver">
          <span class="flex-auto">{{todo.id+1}}) {{todo.text}}</span>
          <button @click="remove(todo)"><img src="https://icon.now.sh/delete"></button>
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import {init} from './shared'

export default {
  fetch:init,

  data() {
    return {
      text: "New Todo"
    }
  },

  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },

  methods:{
    ...mapActions([
      'add',
      'remove'
    ])
  }
}

</script>
