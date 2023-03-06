<template>
  <div>
    <div class="new-category-wrapper">
      <button
        class="add-new-category-button"
        v-if="!this.showButton"
        @click="showAddCategory()"
      >
        Add Category
      </button>
      <button
        class="add-new-category-button"
        v-if="this.showButton"
        @click="showAddCategory()"
      >
        Cancel
      </button>
      <form v-if="this.showButton" class="new-category-form-wrapper">
        <input
          type="text"
          placeholder="New Category title"
          class="new-category-input"
          v-model="categoryForm.name"
        />
        <button
          class="submit-category-form"
          @click.prevent="submitCategoryForm()"
        >
          Submit
        </button>
        <p>{{ this.massage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
      categoryForm: {
        name: '',
      },
      massage: '',
    }
  },
  methods: {
    showAddCategory() {
      this.showButton = !this.showButton
    },
    async submitCategoryForm() {
      const { name } = this.categoryForm
      if (!name) {
        this.massage = 'Please enter category name'
        return
      }
      const data = {
        name,
      }
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'post',
          url: '/categories',
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
.new-category-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.add-new-category-button {
  padding: 3px;
  background-color: #e2c7c7;
  border: 1px solid transparent;
  border-radius: 3px;
  text-transform: capitalize;
  margin-top: 20px;
}
.new-category-form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.new-category-input {
  outline: none;
  width: 200px;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 3px;
}
.submit-category-form {
  padding: 3px;
  background-color: #e2c7c7;
  border: 1px solid transparent;
  border-radius: 3px;
  text-transform: capitalize;
  margin-top: 20px;
}
</style>
