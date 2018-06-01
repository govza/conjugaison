<template>
  <div class="full-width">
    <q-toolbar color="light">
      <q-toolbar-title>
        Indicatif <span class="text-primary">{{ this.$route.params.id}}</span>
      </q-toolbar-title>
    </q-toolbar>
    <div class="flex justify-around">
      <app-present></app-present>
      <app-passe-compose></app-passe-compose>
      <app-imparfait></app-imparfait>
      <app-plus-que-parfait></app-plus-que-parfait>
      <app-passe-simple></app-passe-simple>
    </div>
  </div>
</template>

<script>
import Present from './Present'
import PasseCompose from './PasseCompose'
import Imparfait from './Imparfait'
import PlusQueParfait from './PlusQueParfait'
import PasseSimple from './PasseSimple'

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
    appPasseSimple: PasseSimple
  }
}
</script>

<style>
</style>
