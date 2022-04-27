<template>
  <div class="main-container">
    <v-row>
      <v-col cols="12" sm="3"> </v-col>

      <v-col id="main-col" cols="12" sm="6">
        <div id="random-article">
          <div v-for="article in articles" :key="article.id">
            <div id="article-item">
              <v-img
                height="205"
                width="302"
                :src="article.image.includes('.jpg') || article.image.includes('.png') ? article.image : 'https://picsum.photos/200/300'"
              ></v-img>
              <v-list-item class="pa-0" link :to="'/articles/' + article.title"><h2>
                {{
                  article.title.length > 25
                    ? article.title.substring(0, 40) + '...'
                    : article.title
                }}
              </h2></v-list-item>
              <p>
                {{ article.short_description }}
              </p>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="3"> </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ArticlePage',
  data: () => ({
    articles: [],
  }),
  created() {
    const config = {
      method: 'get',
      url: 'https://restify-sahaware-boilerplate.herokuapp.com/api/article?search=&size=9&page=1',
    }
    axios(config)
      .then((response) => {
        const { content } = response.data
        this.articles = content
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
  max-width: 305px;
  text-align: left;
}

#article-item h2 {
  margin-top: 16px;
}
</style>