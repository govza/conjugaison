<template>
  <div class="full-width">
    <q-toolbar color="green-4">
      <q-toolbar-title align="center">
        Indicatif
      </q-toolbar-title>
    </q-toolbar>
    <div class="flex justify-around">
      <app-present></app-present>
      <app-passe-compose></app-passe-compose>
      <app-imparfait></app-imparfait>
      <app-plus-que-parfait></app-plus-que-parfait>
    </div>
    <div class="flex justify-around">
      <app-passe-simple></app-passe-simple>
      <app-passe-anterieur></app-passe-anterieur>
      <app-futur-simple></app-futur-simple>
      <app-futur-anterieur></app-futur-anterieur>
    </div>
  </div>
</template>

<script>
import Present from './Present'
import PasseCompose from './PasseCompose'
import Imparfait from './Imparfait'
import PlusQueParfait from './PlusQueParfait'
import PasseSimple from './PasseSimple'
import PasseAnterieur from './PasseAnterieur'
import FuturSimple from './FuturSimple'
import FuturAnterieur from './FuturAnterieur'

export default {
  name: 'Indicatif',
  data () {
    return {}
  },
  components: {
    appPresent: Present,
    appPasseCompose: PasseCompose,
    appImparfait: Imparfait,
    appPlusQueParfait: PlusQueParfait,
    appPasseSimple: PasseSimple,
    appPasseAnterieur: PasseAnterieur,
    appFuturSimple: FuturSimple,
    appFuturAnterieur: FuturAnterieur
  }
}
</script>

<style>
.q-card {
  min-width: 180px;
  margin: 20px 0 0;
  border-radius: 0;
  box-shadow: none;
  outline: 1px solid #cccccc;
}
</style>
