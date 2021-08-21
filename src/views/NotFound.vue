<template>
  <v-container class="login" :id="d_componentId">
    <v-card class="py-4 px-5" outlined>
      <v-row>
        <v-col class="text-center">
          <v-icon color="primary" x-large>mdi-hand-saw</v-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="text-center text-overline">Under construction</div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Base from "@/common_components/Base.vue";

export default Vue.extend({
  name: "NotFound",
  extends: Base,
  components: {},
  data() {
    return {};
  },
  methods: {},
});
</script>
