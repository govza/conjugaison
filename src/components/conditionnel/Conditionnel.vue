<template>
  <div class="full-width">
    <q-toolbar color="secondary">
      <q-toolbar-title align="center">
        Conditionnel
      </q-toolbar-title>
    </q-toolbar>
    <div class="row padding justify-around">
      <app-present></app-present>
      <app-passe></app-passe>
    </div>
  </div>
</template>

<script>
import Present from './Present'
import Passe from './Passe'

export default {
  name: 'Indicatif',
  data () {
    return {}
  },
  components: {
    appPresent: Present,
    appPasse: Passe
  }
}
</script>
