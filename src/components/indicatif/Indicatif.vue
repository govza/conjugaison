<template>
  <div class="full-width">
    <q-toolbar color="light">
      <q-toolbar-title>
        Indicatif <span class="text-primary">{{ this.$route.params.id}}</span>
      </q-toolbar-title>
    </q-toolbar>
    <div class="flex justify-around">
      <app-present></app-present>
    </div>
  </div>
</template>

<script>
import Present from './Present'

export default {
  name: 'Indicatif',
  data () {
    return {}
  },
  components: {
    appPresent: Present
  }
}
</script>

<style>
</style>
