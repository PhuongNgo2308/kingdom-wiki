<template>
  <v-container class="login" :id="d_componentId" v-if="!isPageLoading">
    <v-card class="py-4 px-5" outlined>
      <v-form ref="form" v-model="valid" class="mt-5">
        <v-row>
          <v-col md="6" cols="12" class="mx-auto">
            <v-text-field
              v-model="email"
              label="Email"
              prepend-inner-icon="mdi-email"
              maxlength="50"
              :rules="[rules.email, rules.required]"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" cols="12" class="mx-auto py-0">
            <v-text-field
              v-model="password"
              label="Password"
              prepend-inner-icon="mdi-key"
              maxlength="16"
              :rules="[rules.min, rules.required]"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" cols="12" class="mx-auto">
            <v-btn
              class="font-weight-bold"
              color="primary"
              :disabled="!valid"
              :loading="d_isSubmitting"
              @click="onSubmit"
              plain
              block
              outlined
            >
              Login
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import Base from "@/common_components/Base.vue";
import authService from "@/services/authService";

export default Vue.extend({
  name: "Login",
  extends: Base,
  components: {},
  data() {
    return {
      valid: false as boolean,
      showPassword: false as boolean,
      email: "" as string,
      password: "" as string,
      rules: {
        required: (v: any) => !!v || "This field is required",
        min: (v: any) => v.length >= 8 || "Min 8 characters",
        email: (v: any) => /.+@.+\..+/.test(v) || "Enter a valid email",
        // maxlength50: (v: any) =>
        //   (!!v && v.length <= 50) ||
        //   "This field must be less than 50 characters",
        // maxlength16: (v: any) =>
        //   (!!v && v.length <= 16) ||
        //   "This field must be less than 16 characters",
      },
      d_isSubmitting: false,
    };
  },
  // mounted(): void {
  //   setTimeout(() => {
  //     this.setPageLoading(false);
  //   }, 500);
  // },
  methods: {
    onSubmit(): void {
      this.d_isSubmitting = true;
      authService
        .signInWithEmailAndPassword(this.email, this.password)
        .catch((err) => {
          console.log(err);
          // this.error = err.message;
        })
        .finally(() => (this.d_isSubmitting = false));
    },
    ...mapActions(["setUser"]),
  },
});
</script>

<style></style>
