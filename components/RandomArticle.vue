<template>
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
        <p>
          {{ article.short_description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    articles: [],
  }),
  created() {
    const config = {
      method: 'get',
      url: 'https://restify-sahaware-boilerplate.herokuapp.com/api/article?search=&size=3&page=3',
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
  padding: 0;
  background: none;
  display: flex;
  gap: 20px;
  align-content: space-between;
}

#article-item {
  margin: auto;
  max-width: 305px;
  text-align: left;
}

#article-item h2 {
  margin-top: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
}

#article-item p {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */
  color: #000000;
}

@media (max-width: 500px) {
  #article-item {
  margin: auto;
  max-width: 305px;
  text-align: left;
}
}
</style>