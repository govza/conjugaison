<template>
  <q-card inline class="q-ma-sm">
    <q-card-title class="text-info">
      Présent
    </q-card-title>
    <q-card-main>
        <p v-for="verb in getVerb()" :key="verb" v-html="verb"></p>
    </q-card-main>
  </q-card>
</template>
<script>
export default {
  methods: {
    getVerb () {
      return this.$store.getters['verb/getSubjPresent']
    }
  }
}
</script>
