<template>
  <div>
    <ul class="panel-navigation">
      <li><nuxt-link to="/owner">Admin</nuxt-link></li>
      <li><nuxt-link to="/owner/adminManagment">Admin Managment</nuxt-link></li>
      <li>
        <nuxt-link to="/owner/categoryManagment">Category Managment</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/owner/subCategoryManagment"
          >SubCategory Managment</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/owner/productManagment">Product managment</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.panel-navigation {
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 20px;
  margin-top: 40px;
  li {
    list-style: none;
  }
}
</style>
