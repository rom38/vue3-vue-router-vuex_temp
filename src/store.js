import { createStore } from 'vuex/dist/vuex.cjs'
import PouchDB from 'pouchdb'

export const store = createStore({
  state() {
    return {
      count: 1,
    }
  },
  mutations: {
    increment (state) {
      // mutate state
      state.count++
    }
  }
})
