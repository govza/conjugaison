<template>
  <div class="full-width">
    <q-toolbar color="red-11">
      <q-toolbar-title align="center">
        Imperatif
      </q-toolbar-title>
    </q-toolbar>
    <div class="flex justify-around card-container">
      <app-present></app-present>
      <app-passe></app-passe>
    </div>
  </div>
</template>

<script>
import Present from './Present'
import Passe from './Passe'

export default {
  name: 'Imperatif',
  data () {
    return {}
  },
  components: {
    appPresent: Present,
    appPasse: Passe
  }
}
</script>
