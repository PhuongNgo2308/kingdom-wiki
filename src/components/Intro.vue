<template>
  <v-container :id="c_combinedId">
    <ViewModeEditor
      :ex-id="c_combinedId"
      :content="d_previewContent"
    ></ViewModeEditor>
    <v-row class="mt-2">
      <v-col class="mb-4">
        <Editor
          :ex-id="c_combinedId"
          @on-content-changed="contentChanged"
        ></Editor>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Base from "@/common_components/Base.vue";
import ViewModeEditor from "@/common_components/ViewModeEditor.vue";
import Editor, { EditorContentModel } from "@/common_components/Editor.vue";

export default Vue.extend({
  name: "Intro",
  components: {
    Editor,
    ViewModeEditor,
  },
  extends: Base,
  data() {
    return {
      d_previewContent: "" as string,
    };
  },
  methods: {
    contentChanged({ content = "" }: EditorContentModel): void {
      this.d_previewContent = content;
    },
  },
  // mounted() {},
});
</script>
