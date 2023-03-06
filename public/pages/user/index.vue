<template>
  <div>
    <DesktopHeader class="desktop-header" />
    <PhoneHeader class="phone-header" />
    <div class="user-page-wrapper">
      <section class="panel-wrapper">
        <UserPanel />
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    if (!localStorage.getItem('authToken')) {
      this.$router.push('/register')
    }
  },
  computed: {
    singleUser() {
      return this.$store.state.singleUser.singleUser
    },
  },
  async created() {
    try {
      await this.$store.dispatch('singleUser/getSingleUser')
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style lang="scss">
.user-page-wrapper {
  background-color: #e2c7c7;
  min-height: 100vh;
}
.panel-wrapper {
  margin-top: 68px;
}
</style>
