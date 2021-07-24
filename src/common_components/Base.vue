<script lang="ts">
import Vue from "vue";
// base class for all components
// contain the shared props and stuffs
export default Vue.extend({
  name: "Base",
  props: {
    exId: {
      type: String,
      required: true,
      default: (): string => {
        return "";
      },
    },
  },
  computed: {
    c_id: function() {
      return `${this.exId}--component-name`;
    },
  },
});
</script>
