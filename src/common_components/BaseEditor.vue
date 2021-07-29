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
  watch: {
    content(newValue): void {
      this.d_content = newValue;
    },
  },
  mounted(): void {
    (this.$refs.editor as any)?.$el.setAttribute("spellcheck", false);
  },
});
</script>
