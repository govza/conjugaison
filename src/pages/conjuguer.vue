<template>
  <q-page class="flex justify-around" v-if="this.$store.state.verb">
    <app-indicatif style="margin: 0 0 20px 0"></app-indicatif>
    <app-conditionnel class="col-md-6"></app-conditionnel>
    <app-imperatif class="col-md-6"></app-imperatif>
  </q-page>
</template>

<style>
</style>

<script>
import Indicatif from '../components/indicatif/Indicatif'
import Conditionnel from '../components/conditionnel/Conditionnel'
import Imperatif from '../components/imperatif/Imperatif'

export default {
  components: {
    appIndicatif: Indicatif,
    appConditionnel: Conditionnel,
    appImperatif: Imperatif
  }
}
</script>

<style>
.card-container {
  min-height: 100%;
}
.q-card {
  min-height: 100%;
  min-width: 180px;
  margin: 20px 0 0;
  border-radius: 0;
  box-shadow: none;
  outline: 1px solid #cccccc;
}
</style>
