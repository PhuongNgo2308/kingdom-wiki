<template>
  <VueEditor
    :id="c_combinedId"
    v-model="d_content"
    :editor-options="d_editorOptions"
    :editor-toolbar="d_editorToolbars"
    ref="editor"
  ></VueEditor>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
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
      ],
    };
  },
  watch: {
    d_content(newValue): void {
      let _content = this.createContent(newValue);
      this.$emit("on-content-changed", _content);
    },
  },
  // computed: {},
  // mounted(): void {
  //   (this.$refs.editor as any).$el.setAttribute("spellcheck", false);
  // },
  methods: {
    createContent(content: string): EditorContentModel {
      return { content: content };
    },
  },
});
</script>
