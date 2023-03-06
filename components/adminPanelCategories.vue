<template>
  <div>
    <div
      v-for="(category, index) in categories.categories"
      :key="index"
      class="admin-panel-category-container"
    >
      <p>{{ category.name }}</p>
      <div class="admin-panel-controls-wrapper">
        <button @click="deleteCategory(index)">Delete</button>
        <button @click="editForm(index)">Edit</button>
      </div>
    </div>
    <div class="edit-form-wrapper" v-if="showEditForm">
      <form class="edit-form">
        <input
          type="text"
          placeholder="name"
          v-model="editCategoryForm.name"
          class="edit-form-input"
        />
        <div class="edit-form-buttons-wrapper">
          <button class="edit-form-button" @click.prevent="submitEditForm()">
            submit
          </button>
          <button class="edit-form-button" @click.prevent="editForm()">
            cancel
          </button>
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
      editCategoryForm: {
        name: '',
      },
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories.categories
    },
  },
  methods: {
    editForm(index = 0) {
      this.showEditForm = !this.showEditForm
      this.currentSelectedIndex = index
      this.editCategoryForm.name = ''
    },
    async deleteCategory(categoryIndex) {
      const id = this.categories.categories[categoryIndex]._id
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'delete',
          url: `/categories/${id}`,
          headers: { authorization: `Bearer ${token}` },
        })
        if (res.status === 200) {
          location.reload()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async submitEditForm() {
      const { name } = this.editCategoryForm
      if (!name) {
        this.massage = 'Please enter category name'
        return
      }
      const data = {
        name,
      }
      const id = this.categories.categories[this.currentSelectedIndex]._id
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'put',
          url: `/categories/${id}`,
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
.admin-panel-category-container {
  display: flex;
  flex-direction: column;
  background-color: rgba($color: white, $alpha: 0.4);
  border-radius: 3px;
  padding: 10px;
  flex-basis: calc(50% - 10px);
}
.admin-panel-controls-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  button {
    border: none;
    border-radius: 3px;
    padding: 5px;
    background-color: #e2c7c7;
    flex-basis: calc(50% - 6px);
  }
}
</style>
