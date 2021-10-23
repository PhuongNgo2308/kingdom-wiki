<template>
  <v-app-bar id="app-bar" app flat>
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
    <v-spacer></v-spacer>
    <v-btn v-if="!uname" icon to="/login" class="mr-2" link>
      <v-icon>
        mdi-login-variant
      </v-icon>
    </v-btn>
    <!-- <v-btn v-if="uname" icon @click="m_logOut" class="mr-2" link>
      {{ uname }}
      <v-icon>
        mdi-logout-variant
      </v-icon>
    </v-btn> -->

    <v-menu v-if="uname" nudge-bottom="5" rounded="t-xl b-xl" offset-y bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-chip
          v-if="uname"
          v-bind="attrs"
          v-on="on"
          text-color="primary"
          class="pl-2"
          outlined
        >
          <v-avatar left size="30px">
            <v-img src="@/assets/ks_bia.png"></v-img>
          </v-avatar>
          <v-icon right>
            mdi-dots-vertical
          </v-icon>
        </v-chip>
      </template>

      <v-list dense>
        <v-list-item link @click="m_logOut">
          <v-list-item-content>
            <v-list-item-title>Log out</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { mapGetters } from "vuex";
import authService from "@/services/authService";

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
  computed: {
    ...mapGetters(["uname"]),
  },
  methods: {
    m_onClickNavIcon(): void {
      this.$emit("e_toggleNavDrawer");
    },
    m_logOut(): void {
      authService.signOut();
    },
  },
});
</script>
