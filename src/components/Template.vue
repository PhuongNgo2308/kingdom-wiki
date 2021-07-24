<template>
  <v-container>
    This is a template component
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Base from "@/common_components/Base.vue";

export default Vue.extend({
  name: "Template",
  extends: Base,
  components: {},
  props: {
    exId: {
      type: String,
      required: true,
      default: (): string => {
        return "";
      },
    },
  },
  data: () => ({
    d_inputContent: "" as string,
    d_string: "" as string,
    d_array: [] as any[],
  }),
  mounted() {},
  computed: {
    c_id: function() {
      return `${this.exId}--component-name`;
    },
  },
  watch: {
    content: function(newVal) {
      this.d_inputContent = newVal;
    },
  },
});
</script>
