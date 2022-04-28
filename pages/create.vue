<template>
  <div class="main-container">
    <v-row>
      <v-col cols="12" sm="2"></v-col>

      <v-col id="main-col" cols="12" sm="8">
        <div id="create">
          <v-form
            ref="form"
            v-model="valid"
            class="create-form"
            lazy-validation
          >
            <div>
              <h1>Create a New Article</h1>
              <p>Title</p>
              <v-text-field
                v-model="title"
                outlined
                placeholder="Enter your article title"
                required
              ></v-text-field>
              <v-textarea
                v-model="description"
                outlined
                height="768"
                placeholder="Write your Story"
              ></v-textarea>
            </div>
            <div>
              <h1>Publication Detail</h1>
              <p>Short description</p>
              <v-textarea
                v-model="short_description"
                outlined
                placeholder="Enter your Article Short Description"
              ></v-textarea>
              <p>Thumbnail</p>
              <v-file-input v-model="image" outlined @change="setImage(image)"></v-file-input>
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
              <v-btn id="publish-btn" @click="publishArticle()">Publish</v-btn>
            </div>
          </v-form>
        </div>
      </v-col>

      <v-col cols="12" sm="2"> </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
export default {
  name: 'LoginForm',
  data: () => ({
    valid: true,
    switch1: false,
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
      // console.log(this.categoryDict[this.select])
    },
    publishArticle() {
      const config = {
        method: 'post',
        url: 'https://restify-sahaware-boilerplate.herokuapp.com/api/article/create',
        headers: {
          Authorization: `Bearer ${this.token}`
        },
        data: {
          title: this.title,
          short_description: this.short_description,
          description: this.description,
          category_id: this.categoryDict[this.select],
          is_visible: this.switch1,
          image: `http://149.129.247.151:9000/${this.selectedImage}`,
        },
      }
      axios(config)
        .then((response) => {
          alert(response.data.message)
        })
        .catch((error) => {
          alert(error)
        })
    },
  },
}
</script>

<style scoped>
#create {
  margin-top: 80px;
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
</style>