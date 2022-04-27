<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template #activator="{ on, attrs }">
        <v-list-item link v-bind="attrs" v-on="on">
          <span id="btn-text">Login</span>
        </v-list-item>
      </template>

      <v-card class="dialog-body">
        <div>
          <h2>Login</h2>
          <div id="cta-wrapper">
            <p>Don't have an account? Create Account</p>
          </div>
        </div>

        <div id="login-form">
          <v-form ref="form" v-model="valid" lazy-validation>
            <p>Email</p>
            <v-text-field
              v-model="email"
              outlined
              :rules="emailRules"
              placeholder="Enter your email"
              required
            ></v-text-field>
            <p>Password</p>
            <v-text-field
              v-model="Password"
              outlined
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              placeholder="Enter your password"
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn :disabled="!valid" color="#ED3237" class="mr-4 login-btn"> Login </v-btn>
          </v-form>
        </div>
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
.dialog-body {
  padding: 80px;
}

#cta-wrapper {
    display: flex;
    margin-bottom: 48px;
}

.login-btn {
    color: white;
    text-transform: none;
}
</style>