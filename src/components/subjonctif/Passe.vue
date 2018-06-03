<template>
  <q-card inline class="q-ma-sm">
    <q-card-title class="text-info">
      Passé
    </q-card-title>
    <q-card-main>
        <p v-for="verb in getVerb()" :key="verb.id" v-html="verb"></p>
    </q-card-main>
  </q-card>
</template>
<script>
export default {
  methods: {
    getVerb () {
      return this.$store.getters['verb/getSubjPasse']
    }
  }
}
</script>
