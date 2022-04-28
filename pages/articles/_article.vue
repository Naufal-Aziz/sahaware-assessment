<template>
  <div class="container">
    <div class="left-col"></div>
    <div class="center-col">
      <div>
        <div id="article-item">
          <h2>
            {{ singleArticle.title }}
          </h2>
          <h3>{{ singleArticle.short_description }}</h3>
          <v-img
            class="my-2 photo"
            height="393"
            width="628"
            :src="
              singleArticle.image.includes('.jpg') ||
              singleArticle.image.includes('.png') ||
              singleArticle.image.includes('.jpeg')
                ? singleArticle.image
                : 'https://picsum.photos/200/300'
            "
          ></v-img>
          <p><span v-html="singleArticle.description"></span></p>
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
    singleArticle: {
      title: '',
      image: '',
    },
  }),
  created() {
    const judul = this.$route.params.article
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
.container {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

  color: #000000;
}

#article-item p {
  margin-top: 40px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;

  color: #000000;
}

@media (max-width: 360px) {
  .container {
    margin-top: 16px;
    width: 360px;
    display: grid;
    grid-template-columns: 1fr;
  }

  #article-item h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
  }

  #article-item h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    /* or 27px */

    color: #000000;
  }

  #article-item p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    /* or 27px */

    color: #000000;
  }

  .photo {
    height: 225px !important;
    width: 360px !important;
  }

  #article-item {
    width: 328px;
    margin: auto;
    text-align: left;
  }
}
</style>