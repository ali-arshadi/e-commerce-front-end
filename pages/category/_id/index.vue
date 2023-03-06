<template>
  <div>
    <DesktopHeader class="desktop-header" />
    <PhoneHeader class="phone-header" />
    <div class="category-wrapper">
      <section class="category-title">
        <h1>{{ category.title }}</h1>
      </section>
      <section class="site-news-wrapper">
        <SiteNews />
      </section>
      <section class="categories-information">
        <h1>
          {{ category.title }}
        </h1>
        <p>
          {{ category.description }}
        </p>
      </section>
      <section class="categories-wrapper">
        <Categories
          :subCategory="subCategory"
          v-for="subCategory in subCategories"
          :key="subCategory.index"
        />
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ store, route }) {
    await store.dispatch('category/getCategory', route.params.id)
    await store.dispatch('category/getSubCategory', route.params.id)
    const category = store.state.category.category
    const subCategories = store.state.category.subCategories

    return { category, subCategories }
  },
}
</script>

<style lang="scss">
.category-wrapper {
  padding: 35px;
  background: #e2c7c7;
}
.category-title {
  margin-top: 60px;
  text-align: center;
  h1 {
    font-size: 2em;
    font-weight: 500;
  }
}
.categories-information {
  text-align: center;
  margin-top: 35px;
  h1 {
    font-size: 1.5em;
    font-weight: 200;
  }
  p {
    font-size: 0.9em;
    margin-top: 35px;
  }
}
.categories {
  margin-top: 35px;
}
.categories-wrapper {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 35px;
  margin-top: 35px;
}
</style>
