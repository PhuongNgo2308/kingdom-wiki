<template>
  <v-app-bar app flat>
    <v-container class="py-0 fill-height">
      <v-btn v-for="link in links" :key="link" text>
        {{ link.text }}
      </v-btn>

      <!-- <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive> -->
    </v-container>
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
});
</script>
