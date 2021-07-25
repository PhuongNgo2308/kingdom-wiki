<script lang="ts">
import Vue from "vue";
// base class for all components
// contain the shared props and stuffs
export default Vue.extend({
  name: "Base",
  data() {
    return {
      d_componentId: this.$options.name?.toLowerCase(),
    };
  },
  props: {
    exId: {
      type: String,
      // required: true,
      default(): string {
        return "";
      },
    },
  },
  computed: {
    // used for components id, indicate the recursive calling, ex: parentpage--child-component
    c_combinedId(): string {
      return `${this.exId?.toLowerCase() || "root"}--${this.d_componentId}`;
    },
  },
});
</script>
