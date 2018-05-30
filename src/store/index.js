import Vue from 'vue'
import Vuex from 'vuex'

import verb from './verb'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    verb
  }
})

if (process.env.DEV && module.hot) {
  module.hot.accept(['./verb'], () => {
    const newVerb = require('./verb').default
    store.hotUpdate({ modules: { verb: newVerb } })
  })
}

export default store
