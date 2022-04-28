<template>
  <div class="container">
    <div class="left-col"></div>
    <div class="center-col">
      <div id="hero-image">
        <img src="../static/hero-img.png" alt="" width="100%" />
      </div>
      <h1>Article</h1>
      <div id="article-section">
        <div></div>
        <div id="random-article">
          <RandomArticle />
        </div>
        <div></div>
      </div>
    </div>
    <div class="right-col"></div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.container {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
}

.center-col {
  text-align: center;
}

.center-col h1 {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  margin-top: 40px;
  margin-bottom: 48px;
}

#article-section {
  text-align: center;
  margin-bottom: 114px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}

#random-article {
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>