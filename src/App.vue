<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      right
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="@/assets/logo.svg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Phuong Ngo</v-list-item-title>
          <v-list-item-subtitle>Log out</v-list-item-subtitle>
        </v-list-item-content>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <AppBar :links="topLinks" />

    <v-main>
      <v-container>
        <v-sheet min-height="70vh" rounded="lg">
          <router-view />
        </v-sheet>
      </v-container>
    </v-main>

    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppBar, { AppBarLinkModel } from "@/layout/AppBar.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppBar,
  },
  data: () => ({
    topLinks: [
      {
        url: "/news",
        text: "Tin tức",
        icon: "",
      },
      {
        url: "/discussion",
        text: "Thảo luận",
        icon: "",
      },
      {
        url: "/library",
        text: "Thư viện",
        icon: "",
      },
    ] as AppBarLinkModel[],
    drawer: true,
    items: [
      { title: "Activities", icon: "mdi-bell-outline" },
      { title: "Account Settings", icon: "mdi-cog-outline" },
    ],
    mini: true,
    isLogin: false,
  }),
});
</script>

<style lang="sass">
html
  overflow-y: auto !important
</style>
