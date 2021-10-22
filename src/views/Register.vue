<template>
  <v-container class="register" :id="d_componentId">
    <v-card class="py-4 px-5" outlined>
      <v-form ref="form" v-model="valid" class="mt-5">
        <v-row>
          <v-col md="6" cols="12" class="mx-auto">
            <v-text-field
              v-model="email"
              label="Email"
              counter="50"
              prepend-icon="mdi-email"
              dense
              :rules="[rules.email, rules.required, rules.maxlength50]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" cols="12" class="mx-auto">
            <v-text-field
              v-model="password"
              label="Password"
              counter="16"
              prepend-icon="mdi-key"
              dense
              :rules="[rules.min, rules.required, rules.maxlength16]"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mt-5">
          <v-col md="6" cols="12" class="mx-auto">
            <v-btn
              :disabled="!valid"
              @click="onSubmit"
              class="font-weight-bold"
              color="primary"
              :loading="!d_isSubmitting"
              plain
              block
              outlined
              rounded
            >
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Base from "@/common_components/Base.vue";
import authService from "@/services/authService";

interface RegisterModel {
  email: string;
  password?: string;
}

export default Vue.extend({
  name: "Register",
  extends: Base,
  components: {},
  data() {
    return {
      d_isSubmitting: false,
      valid: false as boolean,
      showPassword: false as boolean,
      email: "" as string,
      password: "" as string,
      rules: {
        required: (v: any) => !!v || "This field is required",
        min: (v: any) => v.length >= 8 || "Min 8 characters",
        email: (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        maxlength50: (v: any) =>
          (!!v && v.length <= 50) ||
          "This field must be less than 50 characters",
        maxlength16: (v: any) =>
          (!!v && v.length <= 16) ||
          "This field must be less than 16 characters",
      },
    };
  },
  methods: {
    onSubmit(): void {
      authService
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          debugger;
        })
        .catch((err) => {
          debugger;
        })
        .finally(() => (this.d_isSubmitting = false));
    },
  },
});
</script>

<style></style>
