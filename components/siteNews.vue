<template>
  <div>
    <div class="site-news">
      <h6 class="first-news" v-if="news.first">
        {{ news.first }}
      </h6>
      <h1 class="off" v-if="off.description">{{ off.description }}</h1>
      <h6 class="second-news" v-if="news.second">{{ news.second }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: {
        first: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        second: '+ new arrivals just added',
      },
      off: {
        description: '80% off',
      },
    }
  },
}
</script>

<style lang="scss">
.site-news {
  background: rgba(255, 255, 255, 0.4);
  padding: 20px 30px 20px 30px;
  text-align: center;
  border-radius: 3px;
}
.first-news {
  font-size: 1.1em;
  font-weight: 300;
}
.off {
  font-size: 1.7em;
  font-weight: 800;
  margin-top: 12px;
}
.second-news {
  font-size: 1.1em;
  font-weight: 300;
  margin-top: 12px;
}
@media only screen and (min-width: 992px) {
  .site-news {
    padding: 60px;
  }
  .first-news {
    font-size: 2em;
  }
  .off {
    font-size: 2.6em;
    margin-top: 30px;
  }
  .second-news {
    margin-top: 30px;
    font-size: 2em;
  }
}
</style>
