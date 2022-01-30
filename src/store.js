import { createStore } from 'vuex/dist/vuex.cjs'

export const store = createStore({
  state() {
    return {
      count: 1,
    }
  },
})
