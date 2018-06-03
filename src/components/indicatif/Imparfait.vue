<template>
  <q-card>
    <q-card-title class="text-info">
      Imparfait
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
      return this.$store.getters['verb/getImparfait']
    }
  }
}
</script>
