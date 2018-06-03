<template>
  <div class="full-width">
    <q-toolbar color="red-11">
      <q-toolbar-title align="center">
        Imperatif
      </q-toolbar-title>
    </q-toolbar>
    <div class="flex justify-around">
      <app-present></app-present>
      <app-passe></app-passe>
    </div>
  </div>
</template>

<script>
import Present from '../conditionnel/Present'
import Passe from '../conditionnel/Passe'

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

<style>
.q-card {
  min-width: 180px;
  margin: 20px 0 0;
  border-radius: 0;
  box-shadow: none;
  outline: 1px solid #cccccc;
}
</style>
