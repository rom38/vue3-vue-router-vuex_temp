<template>
  <h1>Aboutt</h1>
  <h2>{{count}}</h2>
</template>

<script>
import {store} from '../store'
//import { Store } from 'vuex'
export default {
  name: 'HelloWorld',
  computed: {
    count(){
    return store.state.count}
  }
}
</script>