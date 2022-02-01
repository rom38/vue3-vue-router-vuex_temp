<template>
  <h1>About</h1>
  <h2>{{count}}</h2>
  <button class="btn btn-primary" @click='increment()' >add_temp</button>
  <p></p>
  <input></input><button>add patient</button>

  <ul class="list-group list-group-numbered" >
  <li class="list-group-item" v-for='pat in patients'>{{pat}}</li>
  </ul>
</template>

<script>
import {store} from '../store'
//import { Store } from 'vuex'
export default {
  name: 'HelloWorld',
  computed: {
    count(){
    return store.state.count},
    patients(){
    return store.state.patients}
  },
  methods: {
    increment () {
      return store.commit('increment')
    }}
}
</script>