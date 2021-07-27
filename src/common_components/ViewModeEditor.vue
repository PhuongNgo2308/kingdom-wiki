<template>
  <VueEditor
    :id="c_combinedId"
    :disabled="true"
    :editorOptions="d_editorOptions"
    :class="classString"
    v-model="d_content"
    ref="editor"
  ></VueEditor>
</template>

<script lang="ts">
import Vue from "vue";
import { VueEditor } from "vue2-editor";
import BaseEditor from "./BaseEditor.vue";

export default Vue.extend({
  name: "ViewModeEditor",
  extends: BaseEditor,
  components: {
    VueEditor,
  },
  props: {},
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

  // computed: {},
  // mounted() {},
});
</script>
