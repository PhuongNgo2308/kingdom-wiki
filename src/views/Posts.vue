<template>
  <v-container class="posts" :id="d_componentId">
    <v-list three-line>
      <template v-for="(item, index) in d_posts">
        <v-list-item :key="index" link route :to="`/view-post/${item.pid}`">
          <v-list-item-avatar>
            <v-img src="@/assets/ks_bia.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-caption">
              {{ item.author }} -
              <TimeString
                :exId="d_componentId"
                :utcDateString="item.created"
                :displayMode="TimeStringMode.CALENDAR"
              ></TimeString>
            </v-list-item-title>
            <v-list-item-subtitle v-html="item.content"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Base from "@/common_components/Base.vue";
import { postDB } from "@/services/fsDb";
import TimeString, { TimeStringMode } from "@/common_components/TimeString.vue";
import rcMixin from "@/mixins/routes-config";

export default Vue.extend({
  name: "Posts",
  extends: Base,
  components: {
    TimeString,
  },
  mixins: [rcMixin],
  data() {
    return {
      d_posts: [] as any[],
    };
  },
  created() {
    const self = this as any;
    postDB
      .orderBy("created", "desc")
      .get()
      .then((querySnapshot) => {
        self.d_posts = querySnapshot.docs.map(function(doc) {
          return { ...doc.data(), pid: doc.id };
        });
      });
  },
  computed: {
    TimeStringMode: () => TimeStringMode, //usage for enum
  },
});
</script>

<style></style>
