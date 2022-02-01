<template>
  <h1>About</h1>
  <h2>{{count}}</h2>
  <button @click='increment()' >add_temp</button>
</template>

<script>
import {store} from '../store'
//import { Store } from 'vuex'
export default {
  name: 'HelloWorld',
  computed: {
    count(){
    return store.state.count}
  },
  methods: {
    increment () {
      return store.commit('increment')
    }}
}
</script>