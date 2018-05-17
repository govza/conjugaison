<template>
  <q-layout view="hHh Lpr fFf" >
    <q-layout-header v-model="header">
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
          Quasar App
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-footer v-model="footer">
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="left = !left" aria-label="Toggle menu on left side" />
        <q-toolbar-title>
          Footer
        </q-toolbar-title>
        <q-btn flat round dense icon="menu" @click="right = !right" aria-label="Toggle menu on right side" />
      </q-toolbar>
    </q-layout-footer>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>

      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>
<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>
