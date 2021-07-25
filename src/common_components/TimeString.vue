<template>
  <span :id="c_id" :class="cssClass">
    {{ c_timeString }}
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import moment from "moment";
import Base from "@/common_components/Base.vue";

export enum TimeStringMode {
  LOCAL_DATE_TIME, //~moment().format("LLLL") : Saturday, July 24, 2021 2:14 PM
  FROM_NOW, //~moment().fromNow() : a few seconds ago, a day ago
  CALENDAR, //~moment().calendar() : Today at 2:14 PM, Yesterday at 2:14 PM
  ISO, //~moment().toISOString() : 2021-07-24T07:35:47.054Z
}

export default Vue.extend({
  name: "TimeString",
  extends: Base,
  components: {},
  props: {
    cssClass: {
      type: String,
      default: (): string => {
        return "";
      },
    },
    utcDateString: {
      type: String,
      required: true,
      default: (): string => {
        return moment().toISOString();
      },
    },
    displayMode: {
      type: Object as PropType<TimeStringMode>,
      required: true,
      default: () => {
        return TimeStringMode.LOCAL_DATE_TIME;
      },
    },
  },
  data: () => ({
    d_id: "TimeString",
  }),
  mounted(): void {},
  computed: {
    c_timeString: function() {
      if (this.displayMode === TimeStringMode.FROM_NOW)
        return `${moment(this.utcDateString).fromNow()}`;
      if (this.displayMode === TimeStringMode.CALENDAR)
        return `${moment(this.utcDateString).calendar()}`;
      if (this.displayMode === TimeStringMode.ISO)
        return `${moment(this.utcDateString).toISOString()}`;

      return `${moment(this.utcDateString).format("LLLL")}`;
    },
  },
});
</script>
