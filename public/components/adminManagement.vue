<template>
  <div>
    <div class="new-admin-wrapper">
      <button
        class="add-new-admin-button"
        v-if="!this.showButton"
        @click="showAddAdmin()"
      >
        Add admin
      </button>
      <button
        class="add-new-admin-button"
        v-if="this.showButton"
        @click="showAddAdmin()"
      >
        Cancel
      </button>
      <form v-if="this.showButton" class="new-admin-form-container">
        <input
          class="new-admin-input"
          type="text"
          v-model="newAdminForm.firstname"
          placeholder="Firstname"
        />
        <input
          class="new-admin-input"
          type="text"
          v-model="newAdminForm.lastname"
          placeholder="Lastname"
        />
        <input
          class="new-admin-input"
          type="text"
          v-model="newAdminForm.username"
          placeholder="Username"
        />
        <input
          class="new-admin-input"
          type="password"
          v-model="newAdminForm.password"
          placeholder="Password"
        />
        <div class="submit-new-admin-form-container">
          <button class="submit-admin-form" @click.prevent="submitAdminForm()">
            Submit
          </button>
          <p>{{ this.massage }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newAdminForm: {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
      },
      showButton: false,
      massage: '',
    }
  },
  methods: {
    showAddAdmin() {
      this.showButton = !this.showButton
    },
    async submitAdminForm() {
      const { firstname, lastname, username, password } = this.newAdminForm
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
          method: 'post',
          url: '/admins',
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
.new-admin-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.new-admin-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.new-admin-input {
  outline: none;
  width: 200px;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 3px;
}
.add-new-admin-button {
  padding: 3px;
  background-color: rgba($color: white, $alpha: 0.4);
  border: 1px solid transparent;
  border-radius: 3px;
  text-transform: capitalize;
  margin-top: 20px;
}
.submit-new-admin-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.submit-admin-form {
  padding: 3px;
  background-color: rgba($color: white, $alpha: 0.4);
  border: 1px solid transparent;
  border-radius: 3px;
  text-transform: capitalize;
  margin-top: 20px;
}
</style>
