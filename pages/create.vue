<template>
  <div class="container">
    <div class="left-col"></div>
    <!-- MAIN -->
    <div v-if="token === ''" class="center-col text-center mt-5">
      <h1>You must log in to access this page.</h1>
    </div>
    <div v-if="token !== ''" class="center-col">
      <div id="create">
        <v-form ref="form" v-model="valid" class="create-form">
          <div>
            <h1>Create a New Article</h1>
            <p>Title</p>
            <v-text-field
              v-model="title"
              :rules="titleRules"
              outlined
              placeholder="Enter your article title"
              required
            ></v-text-field>
            <v-textarea
              v-model="description"
              :rules="descRules"
              outlined
              height="500"
              placeholder="Write your Story"
              required
            ></v-textarea>
          </div>
          <div>
            <h1>Publication Detail</h1>
            <p>Short description</p>
            <v-textarea
              v-model="short_description"
              :rules="descRules"
              outlined
              placeholder="Enter your Article Short Description"
              required
            ></v-textarea>
            <p>Thumbnail</p>
            <v-file-input
              v-model="image"
              outlined
              @change="setImage(image)"
            ></v-file-input>
            <p>Categories</p>
            <v-select
              v-model="select"
              :items="items"
              placeholder="Select Category"
              outlined
              @change="setCategory(select)"
            ></v-select>
            <div id="published-switch">
              <p>Published</p>
              <v-switch v-model="switch1"></v-switch>
            </div>
            <v-btn id="publish-btn" :disabled="!valid" @click="publishArticle()"
              >Publish</v-btn
            >
          </div>
        </v-form>
      </div>
    </div>
    <!-- MAIN -->
    <div class="right-col"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'CreatePage',
  data: () => ({
    valid: false,
    switch1: false,
    titleRules: [(v) => !!v || 'Cannot be empty'],
    descRules: [
      (v) => !!v || 'Cannot be empty',
      (v) => (v && v.length >= 10) || 'At least 10 Characters',
    ],
    categoryDict: {},
    items: [],
    title: '',
    description: '',
    short_description: '',
    image: null,
    selectedImage: '',
    select: '',
  }),
  computed: {
    ...mapState({
      token: (state) => state.token,
    }),
  },
  created() {
    this.categories()
    console.log(this.valid)
    this.title = ''
    this.description = ''
    this.short_description = ''
    this.image = null
    this.selectedImage = ''
    this.select = ''
  },
  methods: {
    categories() {
      const config = {
        method: 'get',
        url: `https://restify-sahaware-boilerplate.herokuapp.com/api/article-category`,
      }

      axios(config)
        .then((response) => {
          const { content } = response.data
          for (let i = 0; i < content.length; i++) {
            this.items.push(content[i].title)
            this.categoryDict[content[i].title] = content[i].id
          }
        })
        .catch((error) => {
          alert(error)
        })
    },
    setImage(value) {
      this.selectedImage = value
    },
    setCategory(value) {
      this.select = value
    },
    publishArticle() {
      if (this.valid === true) {
        const data = new FormData()
        data.append('title', this.title)
        data.append('short_description', this.short_description)
        data.append('description', this.description)
        data.append('category_id', this.categoryDict[this.select])
        data.append('is_visible', this.switch1)
        data.append(
          'image', this.selectedImage
        )
        const config = {
          method: 'post',
          url: 'https://restify-sahaware-boilerplate.herokuapp.com/api/article/create',
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
          data
          // data: {
          //   title: this.title,
          //   short_description: this.short_description,
          //   description: this.description,
          //   category_id: this.categoryDict[this.select],
          //   is_visible: this.switch1,
          //   image: this.selectedImage,
          // },
        }
        axios(config)
          .then((response) => {
            alert(response.data.message)
            console.log(config.data)
          })
          .catch((error) => {
            alert(error)
          })
      }
    },
  },
}
</script>

<style scoped>
.container {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
}

.create-form {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 24px;
}

.create-form h1 {
  margin-bottom: 32px;
}

.create-form p {
  margin: 0;
}

#published-switch {
  display: flex;
  gap: 300px;
  align-items: center;
  align-content: space-between;
}

#publish-btn {
  text-transform: none;
  background-color: #ed3237;
  color: white;
}

@media (max-width: 360px) {
  .container {
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr;
  }
  .create-form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .create-form h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
  }

  #published-switch {
    display: flex;
    gap: 200px;
    align-items: center;
    align-content: space-between;
  }

  #publish-btn {
    text-transform: none;
    background-color: #ed3237;
    color: white;
    width: 100%;
  }
}
</style>