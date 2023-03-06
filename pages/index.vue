<template>
  <div>
    <DesktopHeader class="desktop-header" />
    <PhoneHeader class="phone-header" />
    <div class="home-page-wrapper">
      <section class="home-page-intro-wrapper">
        <h6 class="home-page-intro">
          {{ homepage.homePageIntro.first }}
        </h6>
        <h6 class="home-page-intro hidden-intro">
          {{ homepage.homePageIntro.second }}
        </h6>
        <h6 class="home-page-intro hidden-intro">
          {{ homepage.homePageIntro.third }}
        </h6>
      </section>
      <section class="site-news-wrapper">
        <SiteNews />
      </section>
      <section class="home-page-categories-wrapper">
        <h1 class="home-page-categories-title">
          {{ homepage.homePageCategories.title }}
        </h1>
        <div class="home-page-categories-container">
          <HomePageCategories />
        </div>
      </section>
      <section class="home-page-new-products-wrapper">
        <h1 class="home-page-new-products-title">
          {{ homepage.homePageNewProducts.title }}
        </h1>
        <div class="home-page-new-products-container">
          <NewProducts />
        </div>
      </section>
      <section class="home-page-offers-wrapper">
        <SiteOffer />
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {},
  async asyncData({ store }) {
    await store.dispatch('homepage/getHomepage')
    const homepage = store.state.homepage.homepage
    return { homepage }
  },
}
</script>

<style>
.desktop-header {
  display: none;
}
.home-page-wrapper {
  padding: 35px;
  background-color: #e2c7c7;
}
.home-page-intro-wrapper {
  text-align: center;
  margin-top: 60px;
}
.hidden-intro {
  display: none;
}
.home-page-intro {
  font-weight: 300;
  font-size: 0.9em;
}
.site-news-wrapper {
  margin-top: 35px;
}
.home-page-categories-wrapper {
  margin-top: 35px;
}
.home-page-categories-title {
  font-size: 1.1em;
  font-weight: 500;
}
.home-page-categories-container {
  margin-top: 35px;
}
.home-page-new-products-wrapper {
  margin-top: 35px;
}
.home-page-new-products-title {
  font-size: 1.1em;
  font-weight: 500;
}
.home-page-new-products-container {
  margin-top: 35px;
}
.home-page-offers-wrapper {
  margin-top: 35px;
}

@media only screen and (min-width: 992px) {
  .home-page-intro-wrapper {
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .desktop-header {
    display: initial;
  }
  .phone-header {
    display: none;
  }
  .home-page-wrapper {
    padding: 60px 120px 60px 120px;
  }
  .hidden-intro {
    display: inherit;
  }
  .home-page-intro {
    font-size: 1.3em;
  }
  .site-news-wrapper {
    margin-top: 60px;
  }
  .home-page-categories-wrapper {
    margin-top: 60px;
  }
  .home-page-categories-title {
    font-size: 1.8em;
  }
  .home-page-categories-container {
    margin-top: 60px;
  }
  .home-page-new-products-wrapper {
    margin-top: 60px;
  }
  .home-page-new-products-title {
    font-size: 1.8em;
  }
  .home-page-new-products-container {
    margin-top: 60px;
  }
  .home-page-offers-wrapper {
    margin-top: 60px;
  }
}
</style>
