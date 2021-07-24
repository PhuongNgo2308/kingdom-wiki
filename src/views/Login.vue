<template>
  <v-container class="login"> <h1>Login Page</h1> </v-container>
</template>

<script lang="ts">
import Vue from "vue";

interface LoginModel {
  username: string;
  password: string;
}

export default Vue.extend({
  name: "Login",
  components: {},
  data: () => ({
    d_loginInput: {} as LoginModel,
  }),
});
</script>

<style></style>
