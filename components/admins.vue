<template>
  <div>
    <div class="admin-wrapper" v-for="(admin, index) in admins" :key="index">
      <p class="fullname">Fullname :</p>
      <div class="admin-fullname">
        <p class="admin-firstname">{{ admin.firstname }}</p>
        <p class="admin-lastname">{{ admin.lastname }}</p>
      </div>
      <p class="username">Username :</p>
      <p class="admin-username">{{ admin.username }}</p>
      <button class="admin-button" @click="deleteAdmin(index)">Delete</button>
      <button class="admin-button" @click="editForm(index)">Edit</button>
    </div>
    <div class="edit-form-wrapper" v-if="showEditForm">
      <form class="edit-form">
        <input
          type="text"
          class="edit-form-input"
          placeholder="Firstname"
          v-model="editAdminForm.firstname"
        />
        <input
          type="text"
          class="edit-form-input"
          placeholder="Lastname"
          v-model="editAdminForm.lastname"
        />
        <input
          type="text"
          class="edit-form-input"
          placeholder="Username"
          v-model="editAdminForm.username"
        />
        <input
          type="password"
          class="edit-form-input"
          placeholder="Password"
          v-model="editAdminForm.password"
        />
        <div class="edit-form-buttons-wrapper">
          <button class="edit-form-button" @click.prevent="submitEditForm()">
            submit
          </button>
          <button class="edit-form-button" @click="editForm()">cancel</button>
        </div>
        <p class="form-massage">{{ this.massage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSelectedIndex: 0,
      massage: '',
      showEditForm: false,
      editAdminForm: {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
      },
    }
  },
  computed: {
    admins() {
      const admins = this.$store.state.admins.admins.admins
      let filteredAdmins = []
      filteredAdmins = admins
        ? Array.from(admins).filter((item) => !item.isOwner)
        : []
      return filteredAdmins
    },
  },
  methods: {
    editForm(index = 0) {
      this.showEditForm = !this.showEditForm
      this.currentSelectedIndex = index
      this.editAdminForm.firstname = ''
      this.editAdminForm.lastname = ''
      this.editAdminForm.username = ''
      this.editAdminForm.password = ''
    },
    async deleteAdmin(adminIndex) {
      const id = this.admins[adminIndex]._id
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'delete',
          url: `/admins/${id}`,
          headers: { authorization: `Bearer ${token}` },
        })
        if (res.status === 200) {
          location.reload()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async submitEditForm(adminIndex) {
      const { firstname, lastname, username, password } = this.editAdminForm
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
      const id = this.admins[this.currentSelectedIndex]._id
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'put',
          url: `/admins/${id}`,
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
.admin-wrapper {
  background-color: rgba($color: white, $alpha: 0.4);
  padding: 10px;
}
.admin-fullname {
  display: flex;
}
.admin-firstname {
  margin-right: 2px;
  text-transform: capitalize;
  font-size: 0.9em;
}
.admin-lastname {
  text-transform: capitalize;
  font-size: 0.9em;
}
.admin-username {
  font-size: 0.9em;
  margin-top: 10px;
}
.admin-button {
  background: #e2c7c7;
  border: 1px solid transparent;
  border-radius: 3px;
  margin-top: 10px;
  padding: 5px;
  width: 50px;
  margin-right: 5px;
  font-size: 0.8em;
}
.edit-form-wrapper {
  position: fixed;
  backdrop-filter: blur(30px);
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.edit-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #e2c7c7;
  padding: 20px;
}
.edit-form-buttons-wrapper {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
}
.edit-form-button {
  flex-basis: 50%;
  background-color: rgba($color: white, $alpha: 0.4);
  border-radius: 3px;
  border: 1px solid transparent;
  padding: 5px;
  text-transform: capitalize;
  font-size: 0.8em;
}
.edit-form-input {
  outline: none;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid transparent;
}
.fullname {
  margin-bottom: 10px;
  font-size: 0.8em;
}
.username {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 0.8em;
}
.form-massage {
  text-align: center;
  font-size: 0.7em;
}
</style>
