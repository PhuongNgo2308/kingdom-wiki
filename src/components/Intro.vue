<template>
  <v-container :id="c_combinedId">
    <v-row>
      <v-col class="mb-4">
        <Editor
          :exId="c_combinedId"
          :content="d_inputContent"
          :editorOptions="d_editorOptions"
          :editorToolbar="d_editorToolbars"
        ></Editor>
      </v-col>
    </v-row>
    <ViewModeEditor
      :exId="c_combinedId"
      :content="d_inputContent"
    ></ViewModeEditor>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Base from "@/common_components/Base.vue";
import Editor from "@/common_components/Editor.vue";
import ViewModeEditor from "@/common_components/ViewModeEditor.vue";

export default Vue.extend({
  name: "Intro",
  components: {
    Editor,
    ViewModeEditor,
  },
  extends: Base,
  data() {
    return {
      d_id: "" as string,
      d_inputContent: "" as string,
      d_editorOptions: {
        placeholder: "Compose an epic...",
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
  // mounted() {},
});
</script>
