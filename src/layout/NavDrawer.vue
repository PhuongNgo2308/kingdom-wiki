<template>
  <v-navigation-drawer app v-model="d_showDrawer">
    <v-list dense>
      <v-subheader>Kingdom Story Wiki</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavDrawer",
  components: {},
  data: () => ({
    d_showDrawer: false as boolean,
    items: [
      { text: "Home", icon: "mdi-bell-outline", route: "/" },
      { text: "New post", icon: "mdi-draw", route: "/new-post" },
    ],
    mini: true,
    isLogin: false,
  }),
  props: {
    showDrawer: {
      type: Boolean,
      required: true,
      default: (): boolean => {
        return false;
      },
    },
  },
  watch: {
    showDrawer: function(newShowDrawer) {
      if (newShowDrawer != this.d_showDrawer) {
        this.d_showDrawer = newShowDrawer;
        return;
      }
      this.d_showDrawer = !this.d_showDrawer;
    },
  },
});
</script>

<style lang="sass"></style>
