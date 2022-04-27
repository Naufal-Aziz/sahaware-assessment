<template>
  <div class="main-container">
    <v-row>
      <v-col cols="12" sm="4"> </v-col>

      <v-col id="main-col" cols="12" sm="6">
        <div id="random-article">
          <div>
            <div id="article-item">
              <h2>
                {{ singleArticle.title }}
              </h2>
              <h3>{{ singleArticle.short_description }}</h3>
              <v-img
                class="my-2"
                height="393"
                width="628"
                :src="
                  singleArticle.image.includes('.jpg') ||
                  singleArticle.image.includes('.png')
                    ? singleArticle.image
                    : 'https://picsum.photos/200/300'
                "
              ></v-img>
              <p><span v-html="singleArticle.description"></span></p>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="4"> </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ArticlePage',
  data: () => ({
    singleArticle: {
      title: '',
      image: '',
    },
  }),
  created() {
    const judul = this.$route.params.article
    // alert(this.$route.params.article)
    const config = {
      method: 'get',
      url: `https://restify-sahaware-boilerplate.herokuapp.com/api/article?search=${judul}`,
    }
    axios(config)
      .then((response) => {
        const { content } = response.data
        this.singleArticle = content[0]
      })
      .catch((error) => {
        alert(error)
      })
  },
}
</script>

<style scoped>
#random-article {
  margin: auto;
  padding: 3rem;
  background: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  align-content: space-between;
}

#article-item {
  margin: auto;
  text-align: left;
}

#article-item h2 {
  margin-top: 16px;
  margin-bottom: 24px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
}

#article-item h3 {
  margin-top: 16px;
  margin-bottom: 40px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 150%;
  /* or 36px */

  color: #000000;
}

#article-item p {
  margin-top: 40px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  /* or 30px */

  color: #000000;
}
</style>