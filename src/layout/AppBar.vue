<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="m_onClickNavIcon"></v-app-bar-nav-icon>
    <v-toolbar-title router to="/">Kingdom Story Wiki</v-toolbar-title>
    <!-- <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export interface AppBarLinkModel {
  url: string;
  text: string;
  icon?: string;
}

export default Vue.extend({
  name: "AppBar",
  props: {
    links: {
      type: Array,
      default() {
        return [];
      },
    } as PropOptions<AppBarLinkModel[]>,
  },
  data: () => ({}),
  methods: {
    m_onClickNavIcon: function() {
      this.$emit("e_toggleNavDrawer");
    },
  },
});
</script>
