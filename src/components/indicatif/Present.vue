<template>
  <q-card>
    <q-card-title class="text-info">
      Présent
    </q-card-title>
    <q-card-main>
      <div>
        <p>
          <span class="text-secondary">{{pronom()[0]}}</span><span v-html="present[0]"></span>
        </p>
        <p>
          <span class="text-secondary">{{pronom()[1]}}</span><span v-html="present[1]"></span>
        </p>
        <p>
          <span class="text-secondary">il </span>
          <span v-html="present[2]"></span>
        </p>
        <p>
          <span class="text-secondary">nous </span>
          <span v-html="present[3]"></span>
        </p>
        <p>
          <span class="text-secondary">vous </span>
          <span v-html="present[4]"></span>
        </p>
        <p>
          <span class="text-secondary">ils </span>
          <span v-html="present[5]"></span>
        </p>
      </div>
     </q-card-main>
  </q-card>
</template>
<script>
export default {
  computed: {
    present () {
      return this.$store.getters['verb/getPresent']
    }
  },
  data () {
    return {

    }
  },
  methods: {

    add () {
    },
    pronom () {
      let pronomsArray = []
      pronomsArray.push((/^[aeiouh]$/i).test(this.present[0].slice(0, 1)) ? 'j\'' : 'je ')
      pronomsArray.push((/^[aeiouh]$/i).test(this.present[1].slice(0, 1)) ? 't\'' : 'tu ')
      return pronomsArray
    }
  }
}
</script>
<style>

</style>
