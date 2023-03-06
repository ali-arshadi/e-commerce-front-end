<template>
  <div class="sub-category-managment-page-wrapper">
    <div class="page-content-wrapper">
      <section class="panel-navigation-wrapper">
        <PanelNavigation />
      </section>
      <div class="display-flex-in-panel">
        <section class="category-management-wrapper">
          <p class="category-management-title">SubCategory management</p>
          <div class="category-management-container-component">
            <SubCategoryManagement class="category-management-container" />
          </div>
        </section>
        <section class="admin-panel-categories-wrapper">
          <p class="admin-panel-categories-title">SubCategories</p>
          <div class="admin-panel-categories-container-component">
            <AdminPanelSubCategories class="admin-panel-categories" />
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
  },
  async created() {
    try {
      await this.$store.dispatch('subCategories/getSubCategories')
      await this.$store.dispatch('categories/getCategories')
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style></style>
