<template>
  <v-app-bar app id="app-bar">
    <v-app-bar-nav-icon @click.stop="m_onClickNavIcon"></v-app-bar-nav-icon>
    <v-toolbar-title router to="/">Kingdom Story Wiki</v-toolbar-title>
    <!-- <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn> -->
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
