<template>
  <VueEditor
    :id="c_id"
    :disabled="true"
    :editorOptions="d_editorOptions"
    v-model="d_inputContent"
  ></VueEditor>
</template>

<script lang="ts">
import Vue from "vue";
import { VueEditor } from "vue2-editor";
import Base from "@/common_components/Base.vue";

export default Vue.extend({
  name: "CustomEditor",
  extends: Base,
  components: {
    VueEditor,
  },
  props: {
    content: {
      type: String,
      default: (): string => {
        return "";
      },
    },
    // exId: {
    //   type: String,
    //   required: true,
    //   default: (): string => {
    //     return "";
    //   },
    // },
  },
  data: () => ({
    d_inputContent: "" as string,
    d_editorOptions: {
      disabled: true,
      modules: {
        toolbar: false,
      },
    },
  }),
  computed: {
    // c_id: function() {
    //   return `${this.exId}--view-mode-editor`;
    // },
  },
  watch: {
    content: function(newVal) {
      this.d_inputContent = newVal;
    },
  },
  //   mounted() {
  //     console.log(this);
  //   },
});
</script>
