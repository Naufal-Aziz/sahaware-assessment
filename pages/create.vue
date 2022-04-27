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
                :rules="titleRules"
                placeholder="Enter your article title"
                required
              ></v-text-field>
              <v-textarea
                outlined
                height="768"
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea>
            </div>
            <div>
              <h1>Publication Detail</h1>
              <p>Short description</p>
              <v-textarea
                outlined
                value="asdasdasdasdasdasdasdasdasdasdas dasdasdasdasd"
              ></v-textarea>
              <p>Thumbnail</p>
              <v-file-input outlined></v-file-input>
              <p>Categories</p>
              <v-select v-model="select" :items="items" dense solo @change="setCategory(select)"></v-select>
              <div id="published-switch">
                <p>Published</p>
                <v-switch v-model="switch1"></v-switch>
              </div>
              <v-btn id="publish-btn">Publish</v-btn>
            </div>
          </v-form>
        </div>
      </v-col>

      <v-col cols="12" sm="2"> </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginForm',
  data: () => ({
    dialog: false,
    valid: true,
    switch1: false,
    categoryDict: {},
    items: [],
    user: {},
    title: '',
    select: "Sport",
    titleRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  created() {
    this.categories()
  },
  methods: {
    categories() {
      const config = {
        method: "get",
        url: `https://restify-sahaware-boilerplate.herokuapp.com/api/article-category`,
      };

      axios(config)
        .then((response) => {
          const { content } = response.data;
          for (let i = 0; i < content.length; i++) {
            this.items.push(content[i].title)
            this.categoryDict[content[i].title] = content[i].id
            
          }
          // this.items = content.title;
          console.log(this.categoryDict);
         

          // const cid = this.categoryDict[this.select]

          // api
        })
        .catch((error) => {
          alert(error);
        });
    },
    setCategory(value) {
      this.select = value
       console.log(this.categoryDict[this.select]);
      
    }
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
  gap: 10px;
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
    align-items:center;
    align-content: space-between;
}

#publish-btn {
    text-transform: none;
    background-color: #ed3237;
    color: white;
}
</style>