<template>
  <v-container>
    This is a template component
  </v-container>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Base from "@/common_components/Base.vue";

interface TemplateModel {
  title: string;
}

export default Vue.extend({
  name: "Template",
  extends: Base,
  components: {},
  props: {
    name: String,
    success: { type: String },
    callback: {
      type: Function as PropType<() => void>,
    },
    message: {
      type: Object as PropType<TemplateModel>,
      required: true,
      validator(message: TemplateModel) {
        return !!message.title;
      },
    },
  },
  data() {
    return {
      msg: "Base",
    };
  },
  methods: {
    // need annotation due to `this` in return type
    greet(): string {
      return this.msg + " world";
    },
  },
  computed: {
    // need annotation
    greeting(): string {
      return this.greet() + "!";
    },
  },
});
</script>
