<template>
  <v-app id="inspire">
    <div class="nav-bar">
      <div class="logo">
        <img src="../static/logo.png" alt="" />
      </div>
      <div class="routes">
        <router-link
          v-for="link in links"
          id="nav-link"
          :key="link.id"
          :to="link.route"
        >
          <span :class="[$route.path == link.route ? 'active' : '']">{{
            link.title
          }}</span></router-link
        >
      </div>
      <div class="login">
        <LoginForm v-if="token == ''" />
        <button v-if="token !== ''" @click="user_logout('')">Log out</button>
      </div>
      <div class="nav-drawer">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-navigation-drawer v-model="drawer" app light width="500">
          <div>
            <div class="header">
              <img src="../static/logo.png" alt="" />
              <v-btn text color="white">
                <v-icon color="black" @click="drawer = !drawer"
                  >mdi-close</v-icon
                >
              </v-btn>
            </div>
            <v-btn
              v-for="link in links"
              :key="link.id"
              class="mb-3"
              text
              block
              :to="link.route"
            >
              <span class="list-link">{{ link.title }}</span>
            </v-btn>
          </div>
          <LoginForm />
        </v-navigation-drawer>
      </div>
    </div>

    <v-main class="pa-0">
      <router-view></router-view>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import AppFooter from '../components/AppFooter.vue'
export default {
  name: 'NuxtApp',
  components: { AppFooter },
  data: () => ({
    drawer: false,
    links: [
      { title: 'Home', route: '/' },
      { title: 'Article', route: '/article' },
      { title: 'Create', route: '/create' },
    ],
  }),
  computed: {
    ...mapState({
      token: (state) => state.token,
      guestStatus: (state) => state.guest,
    }),
  },
  methods: {
    user_logout(value) {
      this.$store.dispatch('set_token', value)
    },
  },
}
</script>

<style scoped>
.nav-bar {
  padding: 32px 80px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  border-bottom: 1px solid rgb(190, 190, 190);
}

.nav-drawer {
  display: none;
}

.nav-drawer img {
  align-self: center;
}

.nav-drawer .header {
  display: grid;
  grid-template-columns: 6fr 1fr;
  padding: 24px;
  margin-bottom: 20%;
}

.list-link {
  padding: 16px 150px;
  text-transform: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}

.logo {
  display: grid;
  align-self: center;
  justify-self: center;
}

.routes {
  background-color: white;
}

.login {
  background-color: white;
}

.app-bar {
  background-color: white;
  color: black;
  padding: 0px 80px;
}

#navigations {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  align-content: space-between;
}

#nav-link {
  text-decoration: none;
  color: black;
  margin-left: 20px;
}

.active {
  color: red;
}

@media (max-width: 360px) {
  .nav-bar {
    padding: 20px 16px;
  }
  .nav-drawer {
    display: block;
  } 

  #nav-link {
    display: none;
  }
  .login {
    display: none;
  }
}
</style>
