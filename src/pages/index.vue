<template>
  <q-page class="flex flex-center">
    <q-btn
      v-for="item in popularVerbsArray"
      :key="item"
      :label="item"
      @click="conjuger(item)"
      :color="randomColor()"
    />
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
    },
    randomColor () {
      let btnColors = ['primary', 'secondary', 'tertiary', 'positive', 'negative', 'info', 'warning', 'light', 'dark', 'faded']
      return btnColors[Math.floor(Math.random() * btnColors.length)]
    }
  }
}
</script>
<style lang="stylus">
  button.q-btn
    margin 10px
</style>
