<template>
  <div class="main-container">
    <v-row>
      <v-col cols="12" sm="2"> </v-col>

      <v-col id="main-col" cols="12" sm="8">
        <div id="hero-image">
          <img src="../static/hero-img.png" alt="" width="100%"/>
        </div>
        <div id="article-section">
          <h1>Article</h1>
          <div id="random-article">
            <RandomArticle />
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="2"> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
}

#main-col {
  margin-top: 80px;
}

#hero-image {
  margin-bottom: 80px;
}

#article-section {
  text-align: center;
  margin-bottom: 114px;

}

#article-section h1 {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 48px;
}

#random-article {
  display: flex;
}
</style>