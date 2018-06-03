<template>
  <div class="full-width">
    <q-toolbar color="cyan-5">
      <q-toolbar-title align="center">
        Subjonctif
      </q-toolbar-title>
    </q-toolbar>
    <div class="row justify-around">
      <app-present></app-present>
      <app-passe></app-passe>
      <app-imparfait></app-imparfait>
      <app-plus-que-parfait></app-plus-que-parfait>
    </div>
  </div>
</template>

<script>
import Present from './Present'
import Passe from './Passe'
import Imparfait from './Imparfait'
import PlusQueParfait from './PlusQueParfait'

export default {
  name: 'Subjonctif',
  data () {
    return {}
  },
  components: {
    appPresent: Present,
    appPasse: Passe,
    appImparfait: Imparfait,
    appPlusQueParfait: PlusQueParfait
  }
}
</script>
