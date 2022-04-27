<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template #activator="{ on, attrs }">
        <button link v-bind="attrs" v-on="on">
          <span id="btn-text">Create Account</span>
        </button>
      </template>

      <v-card class="dialog-body">
        <div>
          <h2>Create Account</h2>
          <div id="cta-wrapper">
            <span id="question"> Have an account? </span> <LoginForm/>
          </div>
        </div>

        <div id="register-form">
          <v-form ref="form" v-model="valid" lazy-validation>
            <p>Fullname</p>
            <v-text-field
              v-model="name"
              outlined
              :rules="nameRules"
              placeholder="Enter your fullname"
              required
            ></v-text-field>
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
              placeholder="Enter your password"
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn :disabled="!valid" color="#ED3237" class="mr-4 login-btn" @click="userRegister()"> Register </v-btn>
          </v-form>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    valid: true,
    user: {},
    name: '',
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
    password: '',
    rules: {
      required: (value) => !!value || 'Required.',
    },
  }),
  methods: {
    userRegister() {
      const config = {
      method: 'post',
      url: 'https://restify-sahaware-boilerplate.herokuapp.com/api/auth/register',
      data: {
        name: this.name,
        email: this.email,
        password: this.password,
        phone: '081100000000'
      }
    }
    axios(config)
      .then((response) => {
        alert(response.data.code)
        // console.log(response.data.code);
      })
      .catch((error) => {
        alert(error)
      })
  }
    }
  }

</script>

<style scoped>
.dialog-body {
  padding: 80px;
}

#register-form p {
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