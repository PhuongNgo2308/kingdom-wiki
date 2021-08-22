<script lang="ts">
import Vue from "vue";
import Base from "@/common_components/Base.vue";

export default Vue.extend({
  name: "BaseEditor",
  extends: Base,
  props: {
    content: {
      type: String,
      default(): string {
        return "";
      },
    },
  },
  data() {
    return {
      d_content: "" as string,
    };
  },
  mounted(): void {
    (this.$refs.editor as any)?.$el.setAttribute("spellcheck", false);
  },
  // watch: {},
  // computed: {},
});
</script>
