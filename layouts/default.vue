<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-model="drawer" app light>
      <v-list class="text-center">
        <v-list-item v-for="link in links" :key="link.id" class="text-center" :to="link.route">{{
          link.title
        }}</v-list-item>
      </v-list>
      <LoginForm />
    </v-navigation-drawer> -->

      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
    <!-- <v-app-bar app class="app-bar" color="white">
      <img src="../static/logo.png" alt="" />
      <div id="navigations">
        <div>
          <router-link
            v-for="link in links"
            id="nav-link"
            :key="link.id"
            :to="link.route"
          >
            {{ link.title }}</router-link
          >
        </div>
        <v-spacer></v-spacer>
        <LoginForm v-if="token == ''" />
        <button v-if="token !== ''" @click="user_logout('')">Log out</button>
      </div>
    </v-app-bar> -->
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
          <span :class="[$route.path == link.route ? 'active' : '']">{{ link.title }}</span></router-link
        >
      </div>
      <div class="login">
        <LoginForm v-if="token == ''" />
        <button v-if="token !== ''" @click="user_logout('')">Log out</button>
      </div>
    </div>

    <v-main>
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
</style>
