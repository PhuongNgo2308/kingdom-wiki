<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

// base class for all components
// contain the shared props and stuffs
export default Vue.extend({
  name: "Base",
  data() {
    return {
      d_componentId: this.$options.name?.toLowerCase(),
      d_combinedId: "",
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
    classString: {
      type: String,
      default(): string {
        return "";
      },
    },
  },
  computed: {
    // used for components id, indicate the recursive calling, ex: parentpage--child-component
    c_combinedId(): string {
      const _extid = this.exId?.toLowerCase() || "root";
      const _comId = this.d_componentId;

      return `${_extid}--${_comId}`;
    },
    ...mapGetters(["isPageLoading"]),
  },
  methods: {
    ...mapActions(["setPageLoading"]),
  },
});
</script>
