<template>
  <v-container :id="d_componentId" class="home">
    <h2>Home</h2>
    <Intro :ex-id="d_componentId" />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Intro from "@/components/Intro.vue";
import Base from "@/common_components/Base.vue";

export default Vue.extend({
  name: "Home",
  extends: Base,
  components: {
    Intro,
  },
});
</script>
