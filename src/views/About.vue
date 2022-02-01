<template>
  <h1>Abouttt</h1>
  <h2>{{count}}</h2>
  <button >add_temp</button>
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
    increment(){
      
    }
  }
}
</script>