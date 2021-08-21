<template>
  <v-container :id="d_componentId" v-if="isReady">
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
      <!-- button edit -->
      <v-btn icon outlined class="mr-5" small color="success">
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
    </v-row>
    <v-row>
      <v-col>
        <v-card outlined
          ><ViewModeEditor
            :exId="d_componentId"
            :content="d_postData.content"
          ></ViewModeEditor
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { postService } from "@/services/dataServices";
import Base from "@/common_components/Base.vue";
import ViewModeEditor from "@/common_components/ViewModeEditor.vue";
import TimeString, { TimeStringMode } from "@/common_components/TimeString.vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "ViewPost",
  extends: Base,
  components: {
    ViewModeEditor,
    TimeString,
  },
  props: {
    pid: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      d_postData: null,
    };
  },
  created() {
    const self = this as any;
    this.setPageLoading(true);
    postService
      .doc(this.pid)
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        self.d_postData = { ...data };
        this.setPageLoading(false);
      });
  },
  computed: {
    isReady(): boolean {
      return this.d_postData != null;
    },
    TimeStringMode: () => TimeStringMode, //usage for enum
  },
  methods: {
    ...mapActions(["setPageLoading"]),
  },
});
</script>
