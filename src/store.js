import { createStore } from 'vuex/dist/vuex.cjs'
import PouchDB from 'pouchdb'
var pouchdb = new PouchDB('temp_pat')
var remote = 'http://127.0.0.1:5984'

export const store = createStore({
  state() {
    return {
      count: 1,
      patients:['ivanov']
    }
  },
  mutations: {
    increment (state) {
      // mutate state
      state.count++
    },
    add_pat (state) {
      // mutate state
      state.patients.push("gfhjgfhvh")
    }
  }
})
