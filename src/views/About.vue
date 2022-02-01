<template>
  <h1>About</h1>
  <h2>{{count}}</h2>
  <button @click='increment()' >add_temp</button>
  <p></p>
  <li v-for='pat in patients'>{{pat}}</li>
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