<template>
  <VueEditor
    :id="c_combinedId"
    v-model="d_content"
    :editorOptions="d_editorOptions"
    :editorToolbar="d_editorToolbars"
    ref="editor"
  ></VueEditor>
</template>

<script lang="ts">
import Vue from "vue";
import { VueEditor } from "vue2-editor";
import BaseEditor from "./BaseEditor.vue";

export default Vue.extend({
  name: "Editor",
  extends: BaseEditor,
  components: {
    VueEditor,
  },
  props: {},
  data() {
    return {
      d_inputContent: "" as string,
      d_editorOptions: {
        placeholder: "Compose an epic...",
        spellcheck: "false",
      } as any,
      d_editorToolbars: [
        [{ header: [1, 2, false] }],
        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        ["bold", "italic", "underline"],
        [{ color: ["#821010", "red"] }, { background: ["yellow", "#afa9a9"] }],
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        ["blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image"],
        ["clean"],
        // [{ font: ["Nunito Sans"] }],
        // [{ direction: "rtl" }], // text direction
        // [{ script: "sub" }, { script: "super" }],
        // ["blockquote", "code-block"],
      ] as any[],
    };
  },
  // computed: {},
  // mounted(): void {
  //   (this.$refs.editor as any).$el.setAttribute("spellcheck", false);
  // },
});
</script>
