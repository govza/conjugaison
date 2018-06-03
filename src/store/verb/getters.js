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
const pronomsSubjArray = ['que je', 'que tu', 'qu\'il ', 'que nous', 'que vous', 'qu\'ils']
const etreArraySubjPresent = ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient']
const avoirArraySubjPresent = ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient']
const etreArraySubjImparfait = ['fusse', 'fusses', 'fût', 'fussions', 'fussiez', 'fussent']
const avoirArraySubjImparfait = ['eusse', 'eusses', 'eût', 'eussions', 'eussiez', 'eussent']

export const getVerbObj = state => {
  return state.verbObj.obj
}
export const getPresent = state => {
  let arr = state.verbObj.obj.indicatif.présent
  return addPronoms(arr)
}
export const getPasseCompose = state => {
  let arr = state.verbObj.obj.indicatif['passé composé']
  return addEtreAvoir(state.verbObj.label, arr, etreArrayPresent, avoirArrayPresent)
}
export const getImparfait = state => {
  let arr = state.verbObj.obj.indicatif['imparfait']
  return addPronoms(arr)
}
export const getPlusQueParfait = state => {
  let arr = state.verbObj.obj.indicatif['plus-que-parfait']
  return addEtreAvoir(state.verbObj.label, arr, etreArrayImparfait, avoirArrayImparfait)
}
export const getPasseSimple = state => {
  let arr = state.verbObj.obj.indicatif['passé simple']
  return addPronoms(arr)
}
export const getPasseAnterieur = state => {
  let arr = state.verbObj.obj.indicatif['plus-que-parfait']
  return addEtreAvoir(state.verbObj.label, arr, etreArrayPasseSimple, avoirArrayPasseSimple)
}
export const getFuturSimple = state => {
  let arr = state.verbObj.obj.indicatif['futur simple']
  return addPronoms(arr)
}
export const getFuturAnterieur = state => {
  let arr = state.verbObj.obj.indicatif['futur antérieur']
  return addEtreAvoir(state.verbObj.label, arr, etreArrayFuturSimple, avoirArrayFuturSimple)
}
export const getCondPresent = state => {
  let arr = state.verbObj.obj.conditionnel.présent
  return addPronoms(arr)
}
export const getCondPasse = state => {
  let arr = state.verbObj.obj.conditionnel['passé']
  return addEtreAvoir(state.verbObj.label, arr, etreArrayCondPresent, avoirArrayCondPresent)
}
export const getImperatifPresent = state => {
  let arr = state.verbObj.obj.impératif.présent
  return arr
}
export const getImperatifPasse = state => {
  let arr = state.verbObj.obj.impératif.passé
  return addEtreAvoirClean(state.verbObj.label, arr, etreArrayImpPresent, avoirArrayImpPresent)
}
export const getSubjPresent = state => {
  let arr = state.verbObj.obj.subjonctif.présent
  return addQue(arr)
}
export const getSubjPasse = state => {
  let arr = state.verbObj.obj.subjonctif.passé
  return addEtreAvoirSubj(state.verbObj.label, arr, etreArraySubjPresent, avoirArraySubjPresent)
}
export const getSubjImparfait = state => {
  let arr = state.verbObj.obj.subjonctif.imparfait
  return addQue(arr)
}
export const getSubjPlusQueParfait = state => {
  let arr = state.verbObj.obj.subjonctif['plus-que-parfait']
  return addEtreAvoirSubj(state.verbObj.label, arr, etreArraySubjImparfait, avoirArraySubjImparfait)
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

function addQue (arr) {
  let modPronomsArray = pronomsSubjArray.slice()
  let resultArray = []
  for (let i = 0; i < arr.length; i++) {
    modPronomsArray[i] += '&nbsp;'
    resultArray.push(`<span class="text-secondary">${modPronomsArray[i]}</span>${arr[i]}`)
  }
  return resultArray
}
function addEtreAvoirSubj (infinitif, verbsArray, etreArray, avoirArray) {
  let resultArray = []
  let modPronomsArray = pronomsSubjArray.slice()

  if (VerbesEtre.includes(infinitif)) {
    for (let i = 0; i < pronomsSubjArray.length; i++) {
      resultArray.push(`<span class="text-secondary">${modPronomsArray[i]}</span>&nbsp;<span class="text-info">${etreArray[i]}</span>&nbsp;${verbsArray[i]}`)
    }
  } else {
    for (let i = 0; i < pronomsSubjArray.length; i++) {
      if (i < 1) {
        modPronomsArray[i] = pronomsSubjArray[i].slice(0, -1) + '\''
      } else {
        modPronomsArray[i] += '&nbsp;'
      }
      resultArray.push(`<span class="text-secondary">${modPronomsArray[i]}</span><span class="text-info">${avoirArray[i]}</span>
        &nbsp;${verbsArray[i]}`)
    }
  }
  return resultArray
}
