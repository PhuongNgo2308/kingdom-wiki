<template>
  <v-container :id="d_componentId">
    <v-row align="center" no-gutters>
      <v-avatar size="30px">
        <v-img src="@/assets/ks_bia.png"></v-img>
      </v-avatar>
      <span class="text-caption ml-2">
        <span> {{ d_postData.author }} - </span>
        <TimeString
          :exId="d_componentId"
          :utcDateString="d_postData.created"
          :displayMode="TimeStringMode.CALENDAR"
        ></TimeString
      ></span>
      <v-spacer></v-spacer>
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
      d_postData: {},
    };
  },
  created() {
    const self = this as any;
    postService
      .doc(this.pid)
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        self.d_postData = { ...data };
      });
  },
  computed: {
    TimeStringMode: () => TimeStringMode, //usage for enum
  },
});
</script>
