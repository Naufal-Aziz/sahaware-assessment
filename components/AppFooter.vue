<template>
  <v-footer padless>
    <v-col cols="12" class="app-footer">
      <p>Copyright &copy; Sahaware Assessment {{ new Date().getFullYear() }}</p>
    </v-col>
  </v-footer>
</template>

<script>
export default {}
</script>

<style scoped>
.app-footer {
  padding: 24px 0px 24px 0px;
  background-color: #ed3237;
  color: white;
}

.app-footer p {
  margin: 0px auto 0px 80px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  color: #ffffff;
}

@media (max-width: 400px) {
  .app-footer {
    padding: 24px auto 24px 16px;
  }

  .app-footer p {
    margin-left: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;
  }
}
</style>