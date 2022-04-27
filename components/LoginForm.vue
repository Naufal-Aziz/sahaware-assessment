<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template #activator="{ on, attrs }">
        <button link v-bind="attrs" v-on="on">
          <span id="btn-text">Login</span>
        </button>
      </template>

      <v-card class="dialog-body">
        <div>
          <h2>Login</h2>
          <div id="cta-wrapper">
            <span id="question"> Don't have an account? </span><RegisterForm />
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
              v-model="password"
              outlined
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              placeholder="Enter your password"
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="#ED3237"
              class="mr-4 login-btn"
              @click="userLogin()"
            >
              Login
            </v-btn>
          </v-form>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginForm',
  data: () => ({
    dialog: false,
    valid: true,
    user: {},
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    show1: false,
    password: '',
    rules: {
      required: (value) => !!value || 'Required.',
    },
  }),
  methods: {
    userLogin() {
      const config = {
        method: 'post',
        url: 'https://restify-sahaware-boilerplate.herokuapp.com/api/auth/login',
        data: {
          email: this.email,
          password: this.password,
        },
      }
      axios(config)
        .then((response) => {
          // alert(response.data.content[0].token)
          this.$store.dispatch("set_token", response.data.content[0].token);
          // console.log(response.data.code);
        })
        .catch((error) => {
          alert(error)
        })
    },

  },
}
</script>

<style scoped>
.dialog-body {
  padding: 80px;
}

#login-form p {
  margin: 0;
}

#cta-wrapper {
  display: flex;
  margin-bottom: 48px;
}

.login-btn {
  color: white;
  text-transform: none;
}

#question {
  margin-right: 10px;
}

#btn-text {
  color: #ed3237;
}
</style>