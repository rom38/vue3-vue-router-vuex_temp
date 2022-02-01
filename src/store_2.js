import Vue from 'vue'
import Vuex from 'vuex'
import PouchDB from 'pouchdb'
Vue.use(Vuex)

var pouchdb = new PouchDB('icecream')
var remote = 'https://nn.adamprocter.co.uk/icecream'

const store = new Vuex.Store({
  state: {
    flavour: null
  },

  mutations: {
    GET_DB(state) {
      pouchdb
        .get('myfav')
        .then(function(doc) {
          state.flavour = doc.flavour
        })
        .catch(function(err) {
          console.log(err)
        })
    },

    CHANGE_STATE(state, flavour) {
      state.flavour = flavour
    },
    CLEAR_STATE() {
      store.replaceState({ flavour: null })
    }
  },
  actions: {
    SYNC_DB() {
      // do one way, one-off sync from the server until completion
      pouchdb.replicate.from(remote).on('complete', function(info) {
        // then two-way, continuous, retriable sync
        pouchdb
          .sync(remote, { live: true, retry: true })
          .on('change', function(info) {
            // handle change
            //console.log(info.change.docs[0].flavour)
            store.commit('CHANGE_STATE', info.change.docs[0].flavour)
          })
          .on('paused', function(err) {
            // replication paused (e.g. replication up to date, user went offline)
          })
          .on('active', function() {
            // replicate resumed (e.g. new changes replicating, user went back online)
          })
          .on('denied', function(err) {
            // a document failed to replicate (e.g. due to permissions)
          })
          .on('complete', function(info) {
            // handle complete
          })
          .on('error', function(err) {
            // handle error
          })
      })
    },

    INCOMING_CHANGE(_state, event) {
      var id = 'myfav'
      store.commit('CHANGE_STATE', event)

      // send change also to the pouch
      pouchdb
        .get('myfav')
        .then(function(doc) {
          return pouchdb.put({
            _id: 'myfav',
            _rev: doc._rev,
            flavour: event
          })
        })
        .then(function(response) {
          // handle response
          if (response.ok == true) {
            //if all good could do something
          }
        })
        .catch(function(err) {
          if (err.status == 404) {
            pouchdb.put({ _id: id, flavour: event })
          }
        })
    }
  },

  getters: {
    currentflavour: state => {
      return state.flavour
    }
  }
})

export default store
store.dispatch('SYNC_DB')
store.commit('GET_DB')
