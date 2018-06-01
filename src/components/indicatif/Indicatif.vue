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
    </div>
  </div>
</template>

<script>
import Present from './Present'
import PasseCompose from './PasseCompose'

export default {
  name: 'Indicatif',
  data () {
    return {}
  },
  components: {
    appPresent: Present,
    appPasseCompose: PasseCompose
  }
}
</script>

<style>
</style>
