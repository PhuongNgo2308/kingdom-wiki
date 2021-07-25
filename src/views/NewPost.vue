<template>
  <v-container class="new-post" :id="d_componentId">
    <h2>New Post</h2>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Base from "@/common_components/Base.vue";

interface NewPostModel {
  uid: string;
  content: string;
  created: string;
  updated: string;
}

export default Vue.extend({
  name: "NewPost",
  extends: Base,
  components: {},
  data() {
    return {
      d_model: {} as NewPostModel,
    };
  },
});
</script>

<style></style>
