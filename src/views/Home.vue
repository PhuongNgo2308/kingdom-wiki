<template>
  <v-container :id="d_componentId" class="home">
    <v-card>
      <v-img src="@/assets/ks_bia.png">
        <template v-slot:placeholder>
          <v-skeleton-loader type="image"></v-skeleton-loader>
        </template>
      </v-img>
      <v-card-title>Welcome to out Wiki!</v-card-title>
      <v-card-subtitle>
        Where the ultimate cards battle begins!!!
      </v-card-subtitle>
      <v-card-actions>
        <v-btn
          color="primary lighten-2"
          text
          route
          :to="ROUTES_CFG.NEW_POST[0]"
        >
          <v-icon left>
            mdi-pencil
          </v-icon>
          <span> Start sharing your knowledge</span>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="d_show = !d_show">
          <v-icon>{{ d_show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="d_show">
          <v-divider></v-divider>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            similique nobis fugit obcaecati necessitatibus quisquam, adipisci
            beatae molestiae, debitis corporis in nostrum quia rerum rem
            aspernatur maiores asperiores voluptatibus labore.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Base from "@/common_components/Base.vue";
import rcMixin from "@/mixins/routes-config";

export default Vue.extend({
  name: "Home",
  extends: Base,
  mixins: [rcMixin],
  data() {
    return {
      d_show: false as boolean,
    };
  },
  components: {},
  methods: {},
  // mounted(): void {},
});
</script>
