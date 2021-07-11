<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Kingdom Story Wiki
        </h1>
        <p>
          Kingdom Story là 1 game mobile dạng auto-chess kết hợp yếu tố thẻ bài,
          RPG và quản lý thành thị. Nhìn chung, đây là 1 sản phẩm tốt đến từ xứ
          sở kim chi.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Intro",

  data: () => ({}),
});
</script>
