<template>
  <v-app-bar app id="app-bar">
    <v-app-bar-nav-icon @click.stop="m_onClickNavIcon">
      <v-icon color="primary">mdi-table-of-contents</v-icon>
    </v-app-bar-nav-icon>
    <v-toolbar-title>
      <v-btn icon x-large to="/" color="grey">
        <v-avatar size="45" color="primary lighten-1">
          <span class="white--text">KSW</span></v-avatar
        >
      </v-btn>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export interface AppBarLinkModel {
  url: string;
  text: string;
  icon?: string;
}

export default Vue.extend({
  name: "AppBar",
  props: {
    links: {
      type: Array as PropType<AppBarLinkModel[]>,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    m_onClickNavIcon(): void {
      this.$emit("e_toggle-nav-drawer");
    },
  },
});
</script>
