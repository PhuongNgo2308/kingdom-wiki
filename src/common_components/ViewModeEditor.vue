<template>
  <VueEditor
    :id="c_combinedId"
    :disabled="true"
    :editorOptions="d_editorOptions"
    :class="`${classString} vme`"
    v-model="content"
    ref="editor"
  ></VueEditor>
</template>

<script lang="ts">
import Vue from "vue";
import { VueEditor } from "vue2-editor";
import BaseEditor from "@/common_components/BaseEditor.vue";

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
});
</script>

<style lang="sass">
.vme .ql-container
  border: none !important
</style>
