<template>
  <div>
    <div class="user-info-wrapper">
      <div class="user-info-content">
        <span class="user-profile-pic-frame"
          ><img src="" alt="" class="user-profile-pic"
        /></span>
        <div class="user-info">
          <p class="user-name">
            {{ singleUser.user ? singleUser.user.username : '' }}
          </p>
          <p class="user-email">
            {{ singleUser.user ? singleUser.user.email : '' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    singleUser() {
      return this.$store.state.singleUser.singleUser
    },
  },
}
</script>

<style lang="scss">
.user-info-wrapper {
  min-height: 100px;
  background-color: rgba($color: white, $alpha: 0.4);
  position: relative;
}
.user-info-content {
  position: absolute;
  top: 50px;
  left: 24px;
  display: flex;
}
.user-info {
  margin-top: 16px;
  margin-left: 12px;
}
p.user-name,
p.user-email {
  color: #3e3e3e;
}
p.user-name {
  font-size: 1.5em;
  text-transform: capitalize;
  margin-bottom: 8px;
}
.user-profile-pic-frame {
  width: 100px;
  height: 100px;
  outline: 1px solid #e2e2e2;
  background-color: whitesmoke;
  border-radius: 50%;
}
</style>
