<template>
  <h1>About</h1>
  <h2>{{count}}</h2>
  <button class="btn btn-primary" @click='increment()' >add_temp</button>
  <p></p>
  <div class="input-group mb-3">
  <input type="text" class="form-control">
  <button class="btn btn-outline-secondary" @click='add_pat()'>add patient</button>
  </div>
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
    },
    add_pat () {
      return store.commit('add_pat')
    }
}
}
</script>