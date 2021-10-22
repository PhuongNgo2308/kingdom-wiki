<template>
  <v-container :id="d_componentId" v-if="!isPageLoading">
    <v-row align="center" no-gutters>
      <v-chip text-color="primary" outlined class="pl-2">
        <v-avatar left size="30px">
          <v-img src="@/assets/ks_bia.png"></v-img>
        </v-avatar>
        {{ d_postData.author }}
      </v-chip>
      <span class="text-caption ml-2">
        <TimeString
          :exId="d_componentId"
          :utcDateString="d_postData.created"
          :displayMode="TimeStringMode.CALENDAR"
        ></TimeString
      ></span>
      <v-spacer></v-spacer>
      <span v-if="!d_isEditing">
        <!-- button edit -->
        <v-btn
          icon
          outlined
          small
          class="mr-5"
          color="accent"
          @click="d_isEditing = true"
        >
          <v-icon small>
            mdi-draw
          </v-icon>
        </v-btn>
        <!-- button delete -->
        <v-btn icon outlined small color="error">
          <v-icon small>
            mdi-delete
          </v-icon>
        </v-btn>
      </span>
      <!-- edit save -->
      <span v-if="d_isEditing">
        <v-btn
          icon
          outlined
          small
          :loading="d_submitting"
          @click="onSavePost"
          color="accent"
          class="mr-5"
        >
          <v-icon small>
            mdi-content-save
          </v-icon>
        </v-btn>
        <!-- edit cancel -->
        <v-btn
          icon
          outlined
          small
          color="decent"
          @click="d_isEditing = false"
          v-if="!d_submitting"
        >
          <v-icon small>
            mdi-cancel
          </v-icon>
        </v-btn>
      </span>
    </v-row>
    <v-row>
      <v-col>
        <v-card outlined
          ><ViewModeEditor
            :exId="d_componentId"
            :content="d_postData.content"
            v-if="!d_isEditing"
          ></ViewModeEditor>
          <Editor
            :exId="d_componentId"
            :content="d_postData.content"
            @on-content-changed="onContentChanged"
            v-if="d_isEditing"
          ></Editor>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";
import { postService } from "@/services/dataServices";
import Base from "@/common_components/Base.vue";
import ViewModeEditor from "@/common_components/ViewModeEditor.vue";
import Editor from "@/common_components/Editor.vue";
import TimeString, { TimeStringMode } from "@/common_components/TimeString.vue";

export default Vue.extend({
  name: "ViewPost",
  extends: Base,
  components: {
    ViewModeEditor,
    TimeString,
    Editor,
  },
  props: {
    pid: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      d_postData: {},
      d_isEditing: false,
      d_editingContent: "",
      d_submitting: false,
    };
  },
  created() {
    this.loadPost(this.pid);
  },
  computed: {
    TimeStringMode: () => TimeStringMode, //usage for enum
  },
  methods: {
    onContentChanged({ content = "" }): void {
      this.d_editingContent = content;
    },
    onSavePost(): void {
      this.d_submitting = true;

      postService
        .doc(this.pid)
        .update({
          content: this.d_editingContent,
          updated: moment().toISOString(),
        })
        .then(() => {
          this.d_submitting = false;
          this.d_isEditing = false;
          this.loadPost(this.pid);
        });
    },
    loadPost(pid: string): void {
      postService
        .doc(pid)
        .get()
        .then((snapshot) => {
          const data = snapshot.data();
          this.d_postData = { ...data };
          this.setPageLoading(false);
        });
    },
  },
});
</script>
