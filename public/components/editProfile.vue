<template>
  <div>
    <div class="edit-profile-wrapper">
      <button
        v-if="!this.showEditInfo"
        @click="editAdminInfo()"
        class="edit-profile-button"
      >
        edit profile
      </button>
      <button
        v-if="this.showEditInfo"
        @click="editAdminInfo()"
        class="edit-profile-button"
      >
        cancel
      </button>
      <div class="edit-profile-form-wrapper" v-if="this.showEditInfo">
        <form>
          <input
            type="text"
            placeholder="Firstname"
            class="edit-profile-input"
            v-model="editProfileForm.firstname"
          />
          <input
            type="text"
            placeholder="Lastname"
            class="edit-profile-input"
            v-model="editProfileForm.lastname"
          />
          <input
            type="text"
            placeholder="Username"
            class="edit-profile-input"
            v-model="editProfileForm.username"
          />
          <input
            type="password"
            placeholder="Password"
            class="edit-profile-input"
            v-model="editProfileForm.password"
          />
          <div class="submit-profile-edit-container">
            <button
              @click.prevent="submitEditForm()"
              class="submit-profile-edit"
            >
              submit
            </button>
            <p>{{ this.massage }}</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showEditInfo: false,
      massage: '',
      editProfileForm: {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
      },
    }
  },
  methods: {
    editAdminInfo() {
      this.showEditInfo = !this.showEditInfo
    },
    async submitEditForm() {
      const { firstname, lastname, username, password } = this.editProfileForm
      if (!firstname) {
        this.massage = 'Please enter your firstname'
        return
      }
      if (!lastname) {
        this.massage = 'Please enter your lastname'
        return
      }
      if (!username) {
        this.massage = 'Please enter your username'
        return
      }
      if (!password) {
        this.massage = 'Please enter your password'
        return
      }
      const data = {
        firstname,
        lastname,
        username,
        password,
      }
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'put',
          url: '/admin/me',
          data: data,
          headers: { authorization: `Bearer ${token}` },
        })
        if (res.status === 200) {
          location.reload()
        }
      } catch (error) {
        console.log(error)
        this.massage = error.response.data.msg
      }
    },
  },
}
</script>

<style lang="scss">
.edit-profile-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba($color: white, $alpha: 0.4);
  padding: 20px;
}
.edit-profile-button {
  padding: 3px;
  background: #e2c7c7;
  border: 1px solid transparent;
  border-radius: 3px;
  text-transform: capitalize;
}
.edit-profile-form-wrapper {
  margin-top: 20px;
  form {
    display: flex;
    flex-direction: column;
  }
}
.edit-profile-input {
  outline: none;
  width: 200px;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 3px;
}
.submit-profile-edit {
  padding: 3px;
  background: #e2c7c7;
  border: 1px solid transparent;
  border-radius: 3px;
  text-transform: capitalize;
  width: 60px;
}
.submit-profile-edit-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
  p {
    margin-top: 10px;
  }
}
</style>
