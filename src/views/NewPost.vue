<template>
  <v-container class="new-post" :id="d_componentId">
    <Editor :ex-id="c_combinedId" @on-content-changed="contentChanged"></Editor>
    <v-row class="mt-3 pr-3">
      <v-spacer></v-spacer>
      <v-btn
        :loading="d_submitting"
        :disabled="d_submitting"
        @click="onSubmitPost"
        class="mr-3 font-weight-bold"
        color="primary"
        plain
        outlined
        rounded
        >Submit</v-btn
      >
      <v-btn @click="onCancelPost" color="decent" plain rounded outlined
        >Cancel</v-btn
      >
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";
import { postService } from "@/services/dataServices";
import Base from "@/common_components/Base.vue";
import Editor, { EditorContentModel } from "@/common_components/Editor.vue";

export interface NewPostModel {
  pid?: string;
  content: string;
  created: string;
  updated: string;
  author: string;
}

export default Vue.extend({
  name: "NewPost",
  extends: Base,
  components: { Editor },
  data() {
    return {
      d_content: "" as string,
      d_submitting: false as boolean,
    };
  },
  methods: {
    contentChanged({ content = "" }: EditorContentModel): void {
      this.d_content = content;
    },
    onSubmitPost(): void {
      this.d_submitting = true;

      const _newPost: NewPostModel = {
        content: this.d_content,
        updated: moment().toISOString(),
        created: moment().toISOString(),
        author: "Admin",
      };

      postService.add(_newPost).then((rs) => {
        this.d_submitting = false;
        this.onCancelPost();
      });
    },
    onCancelPost(): void {
      this.$router.push("/");
    },
  },
});
</script>

<style></style>
