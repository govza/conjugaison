<template>
    <div class="col-xs-6 col-md-4">
      <h6>
        Présent
      </h6>
      {{ $route.params.id }}
      <button @click="add">Add</button>
    </div>
</template>
<script>
export default {
  created () {
    this.$store.dispatch('verb/initVerb', this.$route.params.id)
  },
  computed: {

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
