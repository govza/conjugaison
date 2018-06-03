import VerbesEtre from '../../statics/data/verbes_avec_etre.json'

const etreArrayPresent = ['suis', 'es', 'est', 'sommes', 'êtes', 'sont']
const avoirArrayPresent = ['ai', 'as', 'a', 'avons', 'avez', 'ont']
const pronomsArray = ['je', 'tu', 'il', 'nous', 'vous', 'ils']
const avoirArrayImparfait = ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient']
const etreArrayImparfait = ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient']
const avoirArrayPasseSimple = ['eus', 'eus', 'eut', 'eûmes', 'eûtes', 'eurent']
const etreArrayPasseSimple = ['fus', 'fus', 'fut', 'fûmes', 'fûtes', 'furent']
const avoirArrayFuturSimple = ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront']
const etreArrayFuturSimple = ['serai', 'seras', 'sera', 'serons', 'serez', 'seront']
const avoirArrayCondPresent = ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient']
const etreArrayCondPresent = ['serais', 'serais', 'serait', 'serions', 'seriez', 'seraient']
const avoirArrayImpPresent = ['aie', 'ayons', 'ayez']
const etreArrayImpPresent = ['sois', 'soyons', 'soyez']

export const getVerbObj = state => {
  return state.verbObj.obj
}
export const getPresent = state => {
  let presentArray = state.verbObj.obj.indicatif.présent
  return addPronoms(presentArray)
}
export const getPasseCompose = state => {
  let passeComposeArray = state.verbObj.obj.indicatif['passé composé']
  return addEtreAvoir(state.verbObj.label, passeComposeArray, etreArrayPresent, avoirArrayPresent)
}
export const getImparfait = state => {
  let imparfaitArray = state.verbObj.obj.indicatif['imparfait']
  return addPronoms(imparfaitArray)
}
export const getPlusQueParfait = state => {
  let plusQueParfaitArray = state.verbObj.obj.indicatif['plus-que-parfait']
  return addEtreAvoir(state.verbObj.label, plusQueParfaitArray, etreArrayImparfait, avoirArrayImparfait)
}
export const getPasseSimple = state => {
  let passeSimpleArray = state.verbObj.obj.indicatif['passé simple']
  return addPronoms(passeSimpleArray)
}
export const getPasseAnterieur = state => {
  let plusQueParfaitArray = state.verbObj.obj.indicatif['plus-que-parfait']
  return addEtreAvoir(state.verbObj.label, plusQueParfaitArray, etreArrayPasseSimple, avoirArrayPasseSimple)
}
export const getFuturSimple = state => {
  let futurSimpleArray = state.verbObj.obj.indicatif['futur simple']
  return addPronoms(futurSimpleArray)
}
export const getFuturAnterieur = state => {
  let futurAnterieurArray = state.verbObj.obj.indicatif['futur antérieur']
  return addEtreAvoir(state.verbObj.label, futurAnterieurArray, etreArrayFuturSimple, avoirArrayFuturSimple)
}
export const getCondPresent = state => {
  let condPresentArray = state.verbObj.obj.conditionnel.présent
  return addPronoms(condPresentArray)
}
export const getCondPasse = state => {
  let condPasseArray = state.verbObj.obj.conditionnel['passé']
  return addEtreAvoir(state.verbObj.label, condPasseArray, etreArrayCondPresent, avoirArrayCondPresent)
}
export const getImperatifPresent = state => {
  let presentArray = state.verbObj.obj.impératif.présent
  return presentArray
}
export const getImperatifPasse = state => {
  let array = state.verbObj.obj.impératif.passé
  return addEtreAvoirClean(state.verbObj.label, array, etreArrayImpPresent, avoirArrayImpPresent)
}

function addEtreAvoir (infinitif, verbsArray, etreArray, avoirArray) {
  let resultArray = []
  let modPronomsArray = pronomsArray.slice()

  if (VerbesEtre.includes(infinitif)) {
    for (let i = 0; i < pronomsArray.length; i++) {
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

function addEtreAvoirClean (infinitif, verbsArray, etreArray, avoirArray) {
  let resultArray = []

  if (VerbesEtre.includes(infinitif)) {
    for (let i = 0; i < verbsArray.length; i++) {
      resultArray.push(`<span class="text-info">${etreArray[i]}</span>&nbsp;${verbsArray[i]}`)
    }
  } else {
    for (let i = 0; i < verbsArray.length; i++) {
      resultArray.push(`<span class="text-info">${avoirArray[i]}</span>
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
  for (let i = 0; i < verbsArray.length; i++) {
    if (isMuet(verbsArray[i]) & i < 1) {
      modPronomsArray[i] = pronomsArray[i].slice(0, -1) + '\''
    } else {
      modPronomsArray[i] += '&nbsp;'
    }
    resultArray.push(`<span class="text-secondary">${modPronomsArray[i]}</span>${verbsArray[i]}`)
  }
  return resultArray
}
