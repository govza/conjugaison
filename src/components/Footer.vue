<template>
  <q-layout-footer>
    <q-toolbar>
      <q-toolbar-title>
        <q-search
          class="no-shadow"
          icon="search"
          inverted
          v-model="terms"
          clearable
          placeholder="Verbe...">
          <q-autocomplete @search="search" @selected="selected" />
        </q-search>
      </q-toolbar-title>
    </q-toolbar>
  </q-layout-footer>
</template>

<script>
import verbs from '../statics/data/verbes_lowercase.json'
import { filter } from 'quasar'

function parseVerbs () {
  return verbs.map(verb => {
    if (verb.infinitif && verb.infinitif.présent) {
      return {
        label: verb.infinitif.présent[0],
        value: verb.infinitif.présent[0],
        obj: verb
      }
    }
  })
}

export default {
  created () {
    if (this.$route.params.id && !this.$store.state.verbObj) {
      let result = filter(this.$route.params.id, {field: 'value', list: parseVerbs()})
      this.$store.dispatch('verb/initVerb', result) // todo bug it's not dispatching
    }
  },
  data () {
    return {
      terms: '',
      verbs: parseVerbs
    }
  },
  methods: {
    search (terms, done) {
      setTimeout(() => {
        done(filter(terms, {field: 'value', list: parseVerbs()}))
      }, 100)
    },
    selected (item) {
      this.$store.dispatch('verb/initVerb', item)
      this.$router.push('/conjuguer/' + item.label)
    }
  }
}
</script>

<style lang="stylus">
  .whiteinput
    min-height 38px
    border-radius 2px
    padding-top 8px
    padding-left 8px
    padding-right 8px
    background white

  .no-shadow
    box-shadow none
</style>
