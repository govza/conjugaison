<template>
  <q-page class="flex justify-around" v-if="this.$store.state.verb">
    <app-indicatif></app-indicatif>
  </q-page>
</template>

<style>
</style>

<script>
import Indicatif from '../components/indicatif/Indicatif'

export default {
  created () {
    // this.$store.dispatch('verb/initVerb', this.$route.params.id) todo initializing from route
  },
  components: {
    appIndicatif: Indicatif
  }
}
</script>
