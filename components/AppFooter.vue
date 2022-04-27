<template>
  <v-footer padless>
    <v-col cols="12" class="app-footer">
      <p>
        Copyright &copy; Sahaware Assessment {{ new Date().getFullYear() }}
      </p>
    </v-col>
  </v-footer>
</template>

<script>
export default {}
</script>

<style scoped>
.app-footer {
    padding: 24px 0px 24px 0px;
    background-color: #ED3237;
    color: white;
}

.app-footer p {
  margin: 0px auto 0px 80px;
}

</style>