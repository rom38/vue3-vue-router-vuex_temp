import { createStore } from 'vuex/dist/vuex.cjs'
import PouchDB from 'pouchdb'
var pouchdb = new PouchDB('temp_pat')

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
    }
  }
})
