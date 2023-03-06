<template>
  <div>
    <DesktopHeader class="desktop-header" />
    <PhoneHeader class="phone-header" />
    <div class="subCategory-page-wrapper">
      <section class="subCategory-title">
        <h1>{{ this.$route.params.id }}</h1>
      </section>
      <section class="site-news-wrapper">
        <SiteNews />
      </section>
      <section class="subCategories-information">
        <h1>View all</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          deleniti magni veniam excepturi aperiam.
        </p>
      </section>
      <section class="filter-sort-wrapper">
        <div class="view-container">
          <p>View all</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            viewBox="0 0 10 6"
          >
            <path
              id="Path_6"
              data-name="Path 6"
              d="M9.685,4,5,9.39.325,4,0,4.232,5,10l5-5.772Z"
              transform="translate(0 -4)"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div class="filter-container">
          <p>Filter & Sort</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="16"
            viewBox="0 0 22 16"
          >
            <path
              id="Path_5"
              data-name="Path 5"
              d="M12.986,7a1.9,1.9,0,0,0-1.843,1.333H2.471a.489.489,0,0,0-.42.22.422.422,0,0,0,0,.448.489.489,0,0,0,.42.22h8.673a1.94,1.94,0,0,0,3.686,0H23.5a.489.489,0,0,0,.42-.22.421.421,0,0,0,0-.448.489.489,0,0,0-.42-.22H14.829A1.9,1.9,0,0,0,12.986,7Zm0,.889a.916.916,0,0,1,.95.849.6.6,0,0,0,0,.082.957.957,0,0,1-1.9,0,.6.6,0,0,0,0-.082A.916.916,0,0,1,12.986,7.889Zm6.692,5.333a1.9,1.9,0,0,0-1.843,1.333H2.471a.489.489,0,0,0-.42.22.422.422,0,0,0,0,.448.489.489,0,0,0,.42.22H17.835a1.94,1.94,0,0,0,3.686,0H23.5a.489.489,0,0,0,.42-.22.421.421,0,0,0,0-.448.489.489,0,0,0-.42-.22H21.521A1.9,1.9,0,0,0,19.678,13.222Zm0,.889a.916.916,0,0,1,.95.849.6.6,0,0,0,0,.082.957.957,0,0,1-1.9,0,.6.6,0,0,0,0-.082A.916.916,0,0,1,19.678,14.111ZM7.729,19.444a1.9,1.9,0,0,0-1.843,1.333H2.471a.489.489,0,0,0-.42.22.422.422,0,0,0,0,.448.489.489,0,0,0,.42.22H5.886a1.94,1.94,0,0,0,3.686,0H23.5a.489.489,0,0,0,.42-.22.421.421,0,0,0,0-.448.489.489,0,0,0-.42-.22H9.571A1.9,1.9,0,0,0,7.729,19.444Zm0,.889a.916.916,0,0,1,.95.849.6.6,0,0,0,0,.082.957.957,0,0,1-1.9,0,.6.6,0,0,0,0-.082A.916.916,0,0,1,7.729,20.333Z"
              transform="translate(-1.986 -7)"
            />
          </svg>
        </div>
      </section>
      <section class="products-wrapper">
        <Products
          :product="product"
          v-for="product in products"
          :key="product.index"
        />
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ store, route }) {
    await store.dispatch('Products/getProducts', route.params.id)
    const products = store.state.Products.products
    return { products }
  },
}
</script>

<style lang="scss">
.subCategory-page-wrapper {
  padding: 35px;
  background: #e2c7c7;
}
.subCategory-title {
  margin-top: 60px;
  text-align: center;
  h1 {
    font-size: 2em;
    font-weight: 500;
  }
}
.subCategories-information {
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
.filter-sort-wrapper {
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.view-container {
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  svg {
    width: 15px;
    height: 15px;
    margin-left: 10px;
  }
}
.filter-container {
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  svg {
    width: 12px;
    height: 12px;
    margin-left: 10px;
  }
}
.products-wrapper {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 35px;
  margin-top: 35px;
}
</style>
