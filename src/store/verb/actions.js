import verbs from '../../statics/data/verbs.json'
import router from '../../router/index'

export const initVerb = ({state, commit}, verbString) => {
  let verbObj = verbs.filter(key => key.label === verbString)[0]
  if (verbObj) {
    commit('SET_VERB', verbObj)
  } else {
    router.push('page/404')
  }
}
