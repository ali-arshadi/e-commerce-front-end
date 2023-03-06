<template>
  <div class="category-managment-page-wrapper">
    <div class="page-content-wrapper">
      <section class="panel-navigation-wrapper">
        <PanelNavigation />
      </section>
      <div class="display-flex-in-panel">
        <section class="category-management-wrapper">
          <p class="category-management-title">category managment</p>
          <div class="category-management-container-component">
            <CategoryManagement class="category-management-container" />
          </div>
        </section>
        <section class="admin-panel-categories-wrapper">
          <p class="admin-panel-categories-title">categories</p>
          <div class="admin-panel-categories-container-component">
            <AdminPanelCategories class="admin-panel-categories" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.categories.categories
    },
  },
  async created() {
    try {
      await this.$store.dispatch('categories/getCategories')
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style lang="scss">
.category-management-wrapper {
  background-color: rgba($color: white, $alpha: 0.4);
  padding: 20px;
}
.admin-panel-categories-wrapper {
  padding: 20px;
}
.admin-panel-categories-title {
  margin-bottom: 10px;
}
.admin-panel-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
</style>
