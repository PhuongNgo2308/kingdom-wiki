<template>
  <Intro />
</template>

<script lang="ts">
import Vue from "vue";
import Intro from "../components/Intro.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Intro,
  },
});
</script>
