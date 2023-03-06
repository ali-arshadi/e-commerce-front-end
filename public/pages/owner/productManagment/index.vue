<template>
  <div class="products-managment-page-wrapper">
    <div class="page-content-wrapper">
      <section class="panel-navigation-wrapper">
        <PanelNavigation />
      </section>
      <div class="display-flex-in-panel">
        <section class="category-management-wrapper">
          <p class="category-management-title">Product managment</p>
          <div class="category-management-container-component">
            <ProductManagment class="category-management-container" />
          </div>
        </section>
        <section class="admin-panel-categories-wrapper">
          <p class="admin-panel-categories-title">Products</p>
          <div class="admin-panel-categories-container-component">
            <AdminPanelProducts class="admin-panel-categories" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    subCategories() {
      return this.$store.state.subCategories.subCategories
    },
    categories() {
      return this.$store.state.categories.categories
    },
    products() {
      return this.$store.state.siteProducts.products
    },
  },
  async created() {
    try {
      await this.$store.dispatch('subCategories/getSubCategories')
      await this.$store.dispatch('categories/getCategories')
      await this.$store.dispatch('siteProducts/getProducts')
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style></style>
