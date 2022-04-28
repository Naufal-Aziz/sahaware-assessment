<template>
  <div class="container">
    <div class="left-col"></div>
    <div class="center-col">
      <div id="random-article">
        <div v-for="article in articles" :key="article.id">
          <div id="article-item">
            <v-img
              height="205"
              width="302"
              :src="
                article.image.includes('.jpg') || article.image.includes('.png') || article.image.includes('.jpeg')
                  ? article.image
                  : 'https://picsum.photos/200/300'
              "
            ></v-img>
            <v-list-item class="pa-0" link :to="'/articles/' + article.title"
              ><h2>
                {{
                  article.title.length > 25
                    ? article.title.substring(0, 40) + '...'
                    : article.title
                }}
              </h2></v-list-item
            >
            <p>{{ article.short_description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right-col"></div>
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
      url: 'https://restify-sahaware-boilerplate.herokuapp.com/api/article?search=&size=9&page=2',
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
.container {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}


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
  margin: 0 auto;
  max-width: 305px;
  text-align: left;
}

#article-item h2 {
  margin-top: 16px;
}

/* media type */
@media (max-width: 400px) {
  .container {
  margin-top: 16px;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
}

#random-article {
  padding: 0;
  margin: auto;
  background: none;
  display: grid;
  grid-template-columns: 1fr;
}

}
</style>