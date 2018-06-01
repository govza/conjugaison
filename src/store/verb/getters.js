import VerbesEtre from '../../statics/data/verbes_avec_etre.json'
const etreArrayPresent = ['suis', 'es', 'est', 'sommes', 'êtes', 'sont']
const avoirArrayPresent = ['ai', 'as', 'a', 'avons', 'avez', 'ont']
const pronomsArray = ['je', 'tu', 'il', 'nous', 'vous', 'ils']
const avoirArrayImparfait = ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient']
const etreArrayImparfait = ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient']

export const getVerbObj = state => {
  return state.verbObj.obj
}
export const getPresent = state => {
  let presentArray = state.verbObj.obj.indicatif.présent
  let result = addPronoms(presentArray)
  return result
}
export const getPasseCompose = state => {
  let passeComposeArray = state.verbObj.obj.indicatif['passé composé']
  const infinitif = state.verbObj.obj.infinitif.présent[0]
  let result = addEtreAvoir(infinitif, passeComposeArray, etreArrayPresent, avoirArrayPresent)
  return result
}
export const getImparfait = state => {
  let imparfaitArray = state.verbObj.obj.indicatif['imparfait']
  let result = addPronoms(imparfaitArray)
  return result
}
export const getPlusQueParfait = state => {
  let plusQueParfaitArray = state.verbObj.obj.indicatif['plus-que-parfait']
  const infinitif = state.verbObj.obj.infinitif.présent[0]
  let result = addEtreAvoir(infinitif, plusQueParfaitArray, etreArrayImparfait, avoirArrayImparfait)
  return result
}

function addEtreAvoir (infinitif, verbsArray, etreArray, avoirArray) {
  let resultArray = []
  let modPronomsArray = pronomsArray.slice()

  if (VerbesEtre.includes(infinitif)) {
    for (let i = 0; i < etreArray.length; i++) {
      resultArray.push(`<span class="text-secondary">${modPronomsArray[i]}</span>&nbsp;<span class="text-info">${etreArray[i]}</span>&nbsp;${verbsArray[i]}`)
    }
  } else {
    for (let i = 0; i < pronomsArray.length; i++) {
      if (i < 1) {
        modPronomsArray[i] = pronomsArray[i].slice(0, -1) + '\''
      } else {
        modPronomsArray[i] += '&nbsp;'
      }
      resultArray.push(`<span class="text-secondary">${modPronomsArray[i]}</span><span class="text-info">${avoirArray[i]}</span>
        &nbsp;${verbsArray[i]}`)
    }
  }
  return resultArray
}

function isMuet (verb) {
  return (/^[aeiouh]$/i).test(verb.slice(0, 1))
}

function addPronoms (verbsArray) {
  let modPronomsArray = pronomsArray.slice()
  let resultArray = []
  for (let i = 0; i < pronomsArray.length; i++) {
    if (isMuet(verbsArray[i]) & i < 1) {
      modPronomsArray[i] = pronomsArray[i].slice(0, -1) + '\''
    } else {
      modPronomsArray[i] += '&nbsp;'
    }
    resultArray.push(`<span class="text-secondary">${modPronomsArray[i]}</span>${verbsArray[i]}`)
  }
  return resultArray
}
