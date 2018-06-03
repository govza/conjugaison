<template>
  <q-layout view="hHh Lpr fFf" >
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          <router-link to="/" class="nostyle">Conjugaison</router-link>
          <div slot="subtitle">La conjugaison des verbes français</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <app-footer></app-footer>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Règles de français</q-list-header>
        <q-item @click.native="openURL('http://la-conjugaison.nouvelobs.com/regles/conjugaison/present-de-l-indicatif-5.php')">
          <q-item-side icon="check" />
          <q-item-main label="Mode indicatif" sublabel="Présent de l'indicatif" />
        </q-item>
        <q-item @click.native="openURL('http://la-conjugaison.nouvelobs.com/regles/conjugaison/mode-conditionnel-40.php')">
          <q-item-side icon="check" />
          <q-item-main label="Mode conditionnel" sublabel="Emploi du conditionnel" />
        </q-item>
        <q-item @click.native="openURL('http://la-conjugaison.nouvelobs.com/regles/conjugaison/mode-subjonctif-41.php')">
          <q-item-side icon="check" />
          <q-item-main label="Mode subjonctif" sublabel="Emploi du subjonctif" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <router-view />
      </transition>
    </q-page-container>
    <q-btn
      round
      color="primary"
      class="fixed-bottom-right"
      style="margin: 0 5px 55px 0"
      v-back-to-top.animate
    >
      <q-icon name="keyboard_arrow_up" />
    </q-btn>
  </q-layout>
</template>
<script>
import { openURL } from 'quasar'
import Footer from '../components/Footer'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  },
  components: {
    appFooter: Footer
  }
}
</script>
<style lang="stylus">
  .nostyle
    text-decoration none
    color white
</style>
