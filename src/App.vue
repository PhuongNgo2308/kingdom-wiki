<template>
  <v-app>
    <AppBar @e_toggleNavDrawer="m_togglerDrawer"></AppBar>
    <NavDrawer :showDrawer="d_showDrawer"></NavDrawer>
    <v-main>
      <v-container class="main-container">
        <router-view />
      </v-container>
    </v-main>

    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavDrawer from "@/layout/NavDrawer.vue";
import AppBar from "@/layout/AppBar.vue";

export default Vue.extend({
  name: "App",
  components: {
    NavDrawer,
    AppBar,
  },
  data: () => ({
    d_showDrawer: false as boolean,
  }),
  mounted() {
    console.log(`mounted`);
  },
  methods: {
    m_togglerDrawer: function() {
      this.d_showDrawer = !this.d_showDrawer;
    },
  },
});
</script>

<style lang="sass">
html
  overflow-y: hidden !important

.ql-container
  font-family: $body-font-family !important

.ql-toolbar *
  font-family: $body-font-family !important

.main-container
  overflow-y: auto
</style>
