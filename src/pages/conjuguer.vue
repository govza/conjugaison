<template>
  <q-page class="flex justify-around" v-if="this.$store.state.verb">
    <q-toolbar color="indigo-9 full-width">
      <q-toolbar-title align="center" class="text-blue-11">
        Conjugaison du verbe <span class="text-white">{{this.$store.state.verb.verbObj.label}}</span>
      </q-toolbar-title>
    </q-toolbar>
    <app-indicatif style="margin: 0 0 20px 0"></app-indicatif>
    <app-conditionnel class="col-md-6"></app-conditionnel>
    <app-imperatif class="col-md-6"></app-imperatif>
    <app-subjonctif style="margin: 20px 0 20px 0">></app-subjonctif>
  </q-page>
</template>

<style>
</style>

<script>
import Indicatif from '../components/indicatif/Indicatif'
import Conditionnel from '../components/conditionnel/Conditionnel'
import Imperatif from '../components/imperatif/Imperatif'
import Subjonctif from '../components/subjonctif/Subjonctif'

export default {
  components: {
    appIndicatif: Indicatif,
    appConditionnel: Conditionnel,
    appImperatif: Imperatif,
    appSubjonctif: Subjonctif
  }
}
</script>

<style>
.q-card-title {
  font-size: 14px;
}
.q-card {
  min-width: 160px;
  min-height: 100%;
}
.q-card .text-secondary, .q-card .text-info {
  font-size: 12px;
}
</style>
