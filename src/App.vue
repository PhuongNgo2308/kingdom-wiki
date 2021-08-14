<template>
  <v-app>
    <AppBar @e_toggle-nav-drawer="m_togglerDrawer"></AppBar>
    <NavDrawer :show-drawer="d_showDrawer"></NavDrawer>
    <v-main class="main-container">
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app
      ><span
        class="text-caption text-center mx-auto primary--text text--lighten--2"
        >&copy; GECKO - 2021</span
      >
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavDrawer from "@/layout/NavDrawer.vue";
import AppBar from "@/layout/AppBar.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppBar,
    NavDrawer,
  },
  data() {
    return {
      d_showDrawer: false as boolean,
    };
  },
  mounted(): void {
    console.log(`mounted`);
  },
  methods: {
    m_togglerDrawer(): void {
      this.d_showDrawer = !this.d_showDrawer;
    },
  },
});
</script>

<style lang="sass">
html
  overflow-y: hidden !important

.main-container
  // width: 100vw
  height: calc(100vh - 64px)
  flex-direction: column
  overflow: auto
  margin-top: 64px
  padding-top: 0 !important

.ql-container
  font-family: $body-font-family !important

.ql-toolbar *
  font-family: $body-font-family !important

// .vme .ql-container
//   border: none !important
</style>
