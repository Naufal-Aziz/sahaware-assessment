<template>
  <div class="main-container">
    <v-row>
      <v-col cols="12" sm="2"> </v-col>

      <v-col id="main-col" cols="12" sm="8">
        <div id="random-article">
          <div>
            <div id="article-item">
              <v-img
                height="205"
                width="302"
                :src="
                  singleArticle.image.includes('.jpg') ||
                  singleArticle.image.includes('.png')
                    ? singleArticle.image
                    : 'https://picsum.photos/200/300'
                "
              ></v-img>
              <!-- <v-list-item link :to="'/_SinglArticle/' + article.title"> -->
              <h2>
                {{
                  singleArticle.title
                }}
              </h2>
              <!-- </v-list-item> -->
            <p><span v-html="singleArticle.description"></span></p>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="2"> </v-col>
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
  max-width: 305px;
  text-align: left;
}

#article-item h2 {
  margin-top: 16px;
}
</style>