<template>
  <VueEditor
    :id="c_combinedId"
    :editor-options="d_editorOptions"
    :editor-toolbar="d_editorToolbars"
    v-model="d_content"
    ref="editor"
  ></VueEditor>
</template>

<script lang="ts">
import Vue from "vue";
import { VueEditor } from "vue2-editor";
import BaseEditor from "@/common_components/BaseEditor.vue";

export interface EditorContentModel {
  content?: string;
}

export default Vue.extend({
  name: "Editor",
  extends: BaseEditor,
  components: {
    VueEditor,
  },
  props: {},
  data() {
    return {
      d_editorOptions: {
        placeholder: "Compose an epic...",
        spellcheck: "false",
      },
      d_editorToolbars: [
        [{ header: [1, 2, 3, 4, false] }],
        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        ["bold", "italic", "underline"],
        [
          { color: ["#c5532b", "red", "silver", "black"] },
          { background: ["yellow", "#afa9a9"] },
        ],
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        ["blockquote", "link"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image"],
        ["clean"],
        // [{ font: ["Nunito Sans"] }],
        // [{ direction: "rtl" }], // text direction
        // [{ script: "sub" }, { script: "super" }],
        // ["blockquote", "code-block"],
      ],
    };
  },
  methods: {},
  created(): void {
    this.d_content = this.content;
  },
  watch: {
    d_content(newVal): void {
      this.$emit("on-content-changed", { content: newVal });
    },
  },
});
</script>
