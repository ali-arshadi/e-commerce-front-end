<template>
  <div>
    <DesktopHeader class="desktop-header" />
    <PhoneHeader class="phone-header" />
    <div class="product-page-wrapper">
      <section class="single-product-wrapper">
        <SingleProduct :singleProduct="singleProduct" />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, route }) {
    await store.dispatch('singleProduct/getSingleProduct', route.params.id)
    const singleProduct = store.state.singleProduct.singleProduct
    console.log(singleProduct)
    return { singleProduct }
  },
}
</script>

<style lang="scss">
.product-page-wrapper {
  padding: 35px;
  background-color: #e2c7c7;
}
.single-product-wrapper {
  margin-top: 60px;
}
</style>
