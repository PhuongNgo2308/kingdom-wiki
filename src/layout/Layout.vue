<script lang="ts">
import Vue from "vue";
import Base from "@/common_components/Base.vue";
import { VNode } from "vue/types/umd";

export default Vue.extend({
  name: "Layout",
  extends: Base,
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  created(): void {
    if (!(Vue as any).options.components[this.name]) {
      Vue.component(this.name, () => import(`@/layout/${this.name}.vue`));
    }

    this.$parent.$emit("update:layout", this.name);
  },
  render(): VNode {
    return this.$slots.default?.[0] || this.$vnode;
  },
});
</script>
