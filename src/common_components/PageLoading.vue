<template>
  <v-row align="center" :id="c_combinedId" no-gutters>
    <v-col align-self="center">
      <v-img src="@/assets/loading.gif" width="200" class="mx-auto"></v-img>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Base from "@/common_components/Base.vue";

// base class for all components
// contain the shared props and stuffs
export default Vue.extend({
  name: "PageLoading",
  extends: Base,
  data() {
    return {};
  },
  props: {},
  computed: {},
});
</script>
