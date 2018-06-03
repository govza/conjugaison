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
import verbs from '../statics/data/infinitifs.json'
import { filter } from 'quasar'

export default {
  created () {
    if (this.$route.params.id && !this.$store.state.verbObj) {
      this.$store.dispatch('verb/initVerb', this.$route.params.id)
    }
  },
  data () {
    return {
      terms: '',
      verbs
    }
  },
  methods: {
    search (terms, done) {
      setTimeout(() => {
        done(filter(terms, {field: 'value', list: verbs}))
      }, 100)
    },
    selected (item) {
      this.$store.dispatch('verb/initVerb', item.label)
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
