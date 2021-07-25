<template>
  <v-card>
    <VueEditor
      :id="c_combinedId"
      :disabled="true"
      :editorOptions="d_editorOptions"
      v-model="c_content"
    ></VueEditor>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { VueEditor } from "vue2-editor";
import Base from "@/common_components/Base.vue";

export default Vue.extend({
  name: "ViewModeEditor",
  extends: Base,
  components: {
    VueEditor,
  },
  props: {
    content: {
      type: String,
      default(): string {
        return "";
      },
    },
  },
  data() {
    return {
      d_editorOptions: {
        disabled: true,
        modules: {
          toolbar: false,
        },
      },
    };
  },
  computed: {
    c_content() {
      return this.content;
    },
  },
  // mounted() {},
});
</script>
