<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app light>
      <v-list>
        <v-list-item v-for="link in links" :key="link.id" :to="link.route">{{
          link.title
        }}</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="app-bar" color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <h1>Assessment</h1>
      <v-spacer></v-spacer>
      <router-link
        v-for="link in links"
        id="nav-link"
        :key="link.id"
        :to="link.route"
      >
        {{ link.title }}</router-link
      >
      <LoginForm />
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script>
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
}
</script>

<style scoped>
.app-bar {
  display: flex;
  background-color: white;
  color: black;
  align-items: space-between;
}

#nav-link {
  text-decoration: none;
  color: black;
  margin-left: 20px;
}
</style>
