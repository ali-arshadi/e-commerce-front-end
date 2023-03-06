<template>
  <div class="admin-managment-page-wrapper">
    <div class="page-content-wrapper">
      <section class="panel-navigation-wrapper">
        <PanelNavigation />
      </section>
      <div class="display-flex-in-panel">
        <section class="admin-management-wrapper">
          <p class="admin-management-title">Admin management</p>
          <div class="admin-management-component-container">
            <AdminManagement />
          </div>
        </section>
        <section class="admins-wrapper">
          <p class="admins">admins</p>
          <div class="admins-component-container">
            <Admins class="admins-container" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    admins() {
      return this.$store.state.admins
    },
  },
  async created() {
    try {
      await this.$store.dispatch('admins/getAdmins')
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style lang="scss">
.page-content-wrapper {
  margin-top: 88px;
  display: flex;
  background: #e2c7c7;
}
.admin-management-wrapper {
  margin-top: 10px;
  padding: 20px;
}
.admin-management-title {
  font-size: 1.2em;
  font-weight: 200;
  text-transform: capitalize;
}
.admins {
  font-size: 1.1em;
  font-weight: 200;
  text-transform: capitalize;
  margin-left: 20px;
}
.admins-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin: 20px;
}
.display-flex-in-panel {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
