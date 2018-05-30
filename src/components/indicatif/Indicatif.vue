<template>
    <q-card>
      <q-card-title>
        Indicatif
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <div class="layout-padding row justify-center">
          <app-present></app-present>
        </div>
      </q-card-main>
    </q-card>
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
