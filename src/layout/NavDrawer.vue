<template>
  <v-navigation-drawer app v-model="d_showDrawer" id="nav-drawer">
    <v-list dense>
      <v-subheader class="px-0 mb-7">
        <v-card tile>
          <v-img src="@/assets/ks_bia.png" height="95px"></v-img>
        </v-card>
      </v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.route"
          router
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
  props: {
    showDrawer: {
      type: Boolean,
      required: true,
      default(): boolean {
        return false;
      },
    },
  },
  data() {
    return {
      d_showDrawer: false as boolean,
      items: [
        { text: "Trang chủ", icon: "mdi-home-outline", route: "/" },
        { text: "Tạo bài viết", icon: "mdi-draw", route: "/new-post" },
      ],
    };
  },
  watch: {
    showDrawer(newShowDrawer): void {
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
