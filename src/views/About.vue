<template>
  <h1>About</h1>
  <h2>{{ count }}</h2>
  <button class="btn btn-primary" @click="increment()">add_temp</button>
  <p></p>
  <div class="input-group mb-3">
    <input type="text" class="form-control" v-model='message' />
    <button class="btn btn-outline-secondary" @click="add_pat(message)">add patient</button>
  </div>
  <ul class="list-group list-group-numbered">
    <li class="list-group-item" v-for="pat in patients">{{ pat }}</li>
  </ul>
</template>

<script>
//import { store } from '../store'
//import { Store } from 'vuex'
export default {
  name: 'HelloWorld',
  data (){
    return {message:'cr'}
  },

  computed: {
    count() {
      return this.$store.state.count
    },
    patients() {
      return this.$store.state.patients
    },
  },
  methods: {
    increment() {
      return this.$store.commit('increment')
    },
    add_pat() {
      return this.$store.commit('add_pat',this.message)
    },
  },
}
</script>
