<template>
  <div>
    <DesktopHeader class="desktop-header" />
    <PhoneHeader class="phone-header" />
    <div class="user-page-wrapper">
      <section class="panel-wrapper">
        <OwnerPanel />
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    if (!localStorage.getItem('authToken')) {
      this.$router.push('/register')
    }
  },
  computed: {
    singleAdmin() {
      return this.$store.state.singleAdmin.singleAdmin
    },
  },
  async created() {
    try {
      await this.$store.dispatch('singleAdmin/getSingleAdmin')
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style></style>
