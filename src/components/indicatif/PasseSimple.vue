<template>
  <q-card>
    <q-card-title class="text-info">
      Passé simple
    </q-card-title>
    <q-card-main>
      <div>
        <p>
          <span v-html="getVerb[0]"></span>
        </p>
        <p>
          <span v-html="getVerb[1]"></span>
        </p>
        <p>
          <span v-html="getVerb[2]"></span>
        </p>
        <p>
          <span v-html="getVerb[3]"></span>
        </p>
        <p>
          <span v-html="getVerb[4]"></span>
        </p>
        <p>
          <span v-html="getVerb[5]"></span>
        </p>
      </div>
     </q-card-main>
  </q-card>
</template>
<script>
export default {
  computed: {
    getVerb () {
      return this.$store.getters['verb/getPasseSimple']
    }
  },
  data () {
    return {

    }
  },
  methods: {
    add () {
    }
  }
}
</script>
