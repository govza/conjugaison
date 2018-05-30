export const initVerb = ({state, commit}, verbString) => {
  console.log('dispatched ' + verbString)
  let verbObj = { 'verb': verbString, 'main': 'theme' }
  commit('SET_VERB', verbObj)
}
