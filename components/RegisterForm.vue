<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template #activator="{ on, attrs }">
        <v-list-item link v-bind="attrs" v-on="on">
          <span id="btn-text">Login</span>
        </v-list-item>
      </template>

      <v-card>
        <div>
          <h2>Login</h2>
          <p>Don't have an account? Create Account</p>
        </div>

        <div id="login-form">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="Password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn :disabled="!valid" color="error" class="mr-4"> Login </v-btn>
          </v-form>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    user: {},
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    show1: false,
    Password: '',
    rules: {
      required: (value) => !!value || 'Required.',
    },
  }),
}
</script>

<style scoped>
#login-form {
  padding: 40px;
}
</style>