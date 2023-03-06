<template>
  <div>
    <div class="admin-page-wrapper">
      <section class="panel-navigation-wrapper">
        <PanelNavigation />
      </section>
      <div class="admin-personal-info">
        <p class="owner-firstname">
          {{
            singleAdmin.adminpersonalinfo
              ? singleAdmin.adminpersonalinfo.firstname
              : ''
          }}
        </p>
        <p class="owner-lastname">
          {{
            singleAdmin.adminpersonalinfo
              ? singleAdmin.adminpersonalinfo.lastname
              : ''
          }}
        </p>
        <section class="eidt-profile-wrapper">
          <EditProfile />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    singleAdmin() {
      return this.$store.state.singleAdmin.singleAdmin
    },
  },
}
</script>

<style lang="scss">
.admin-page-wrapper {
  display: flex;
  margin-top: 88px;
}
.admin-personal-info {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.owner-firstname {
  margin-right: 5px;
  font-size: 1.5em;
}
.owner-lastname {
  font-size: 1.5em;
}
.panel-navigation-wrapper {
  width: 30%;
  background: #d4a5a5;
}
</style>
