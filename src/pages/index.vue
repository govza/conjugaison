<template>
  <q-page class="flex flex-center">
    <q-btn v-for="item in popularVerbsArray" :key="item" :label="item" @click="conjuger(item)"/>
  </q-page>
</template>

<script>
import popularVerbsArray from '../statics/data/verbes_popular.json'

export default {
  name: 'PageIndex',
  data () {
    return {
      popularVerbsArray
    }
  },
  methods: {
    conjuger (item) {
      this.$store.dispatch('verb/initVerb', item)
      this.$router.push('/conjuguer/' + item)
    }
  }
}
</script>
<style lang="stylus">
  button.q-btn
    margin 10px
</style>
