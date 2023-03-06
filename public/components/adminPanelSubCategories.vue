<template>
  <div>
    <div
      class="admin-panel-category-container"
      v-for="(subCategory, index) in subCategories.subCategories"
      :key="index"
    >
      <p>{{ subCategory.name }}</p>
      <p>Category: {{ subCategory.Category.name }}</p>
      <div
        class="sub-category-filters"
        v-for="(filter, index) in subCategory.filters"
        :key="index"
      >
        <div class="filter-name-and-edit">
          <p class="filter-name">Filter: {{ filter.filterName }}</p>
          <button
            class="delete-filter"
            @click="deleteFilter(filter._id, subCategory._id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 6l-3 18h-12l-3-18h2.028l2.666 16h8.611l2.666-16h2.029zm-4.711-4c-.9 0-1.631-1.099-1.631-2h-5.316c0 .901-.73 2-1.631 2h-5.711v2h20v-2h-5.711z"
              />
            </svg>
          </button>
          <button
            class="edit-filter"
            @click="editFilter(filter._id, subCategory._id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M1.439 16.873l-1.439 7.127 7.128-1.437 16.873-16.872-5.69-5.69-16.872 16.872zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zm15.031-15.032l-13.617 13.618-2.86-2.861 10.825-10.826 2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z"
              />
            </svg>
          </button>
        </div>
        <div
          class="sub-category-filter-values"
          v-for="(value, index) in filter.filterValidValues"
          :key="index"
        >
          <p>Value: {{ value }}</p>
        </div>
      </div>
      <div class="admin-panel-controls-wrapper">
        <button @click="addNewFilter(subCategory._id)">Add new filter</button>
        <button @click="deleteSubCategory(index)">Delete</button>
        <button @click="editForm(index)">Edit</button>
      </div>
    </div>
    <div class="edit-form-wrapper" v-if="showEditForm">
      <form class="edit-subCategory">
        <input
          type="text"
          placeholder="name"
          v-model="editSubCategory.name"
          class="edit-form-input"
        />
        <div class="chose-category-container">
          <p>Chose a Category</p>
          <div
            class="chose-category-wrapper"
            v-for="(category, index) in categories.categories"
            :key="index"
          >
            <input
              type="radio"
              :id="category._id"
              name="categoryName"
              :value="category._id"
              v-model="editSubCategory.categoryId"
            />
            <label :for="category._id">{{ category.name }}</label>
          </div>
        </div>
        <div class="edit-form-buttons-wrapper">
          <button class="edit-form-button" @click.prevent="editSubCategroy()">
            Submit
          </button>
          <button class="edit-form-button" @click.prevent="editForm()">
            cancel
          </button>
        </div>
        <p>{{ this.massage }}</p>
      </form>
    </div>
    <div class="edit-form-wrapper" v-if="showEditFilterForm">
      <form class="edit-subCategory">
        <button @click.prevent="editFilter()" class="submit-category-form">
          cancel
        </button>
        <div class="filter-input">
          <input
            type="text"
            placeholder="FilterName"
            v-model="editFilterValues.filterName"
            class="new-category-input"
          />
          <div class="value-input">
            <input
              type="text"
              placeholder="Value"
              v-model="validValue"
              class="new-category-input"
            />
            <button class="submit-category-form" @click.prevent="addEditValue">
              add value
            </button>
          </div>
          <button
            class="submit-category-form"
            @click.prevent="submitEditFilter"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <div class="edit-form-wrapper" v-if="showAddNewFilter">
      <form class="edit-subCategory">
        <button @click.prevent="addNewFilter" class="submit-category-form">
          Cancel
        </button>
        <div class="filter-input">
          <input
            type="text"
            placeholder="FilterName"
            v-model="editFilterValues.filterName"
            class="new-category-input"
          />
          <div class="value-input">
            <input
              type="text"
              placeholder="value"
              v-model="validValue"
              class="new-category-input"
            />
            <button class="submit-category-form" @click.prevent="addEditValue">
              add value
            </button>
          </div>
          <button class="submit-category-form" @click.prevent="submitNewFilter">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      massage: '',
      showEditForm: false,
      currentSelectedIndex: 0,
      showEditFilterForm: false,
      showAddNewFilter: false,
      validValue: '',
      editFilterId: '',
      editSubCategoryId: '',
      editFilterValues: {
        filterName: '',
        filterValidValues: [],
      },
      editSubCategory: {
        name: '',
        categoryId: '',
      },
    }
  },
  computed: {
    subCategories() {
      return this.$store.state.subCategories.subCategories
    },
    categories() {
      return this.$store.state.categories.categories
    },
  },
  methods: {
    addNewFilter(subCategoryId) {
      this.showAddNewFilter = !this.showAddNewFilter
      this.editSubCategoryId = subCategoryId
      this.editFilterValues.filterName = ''
      this.editFilterValues.filterValidValues = []
    },
    addEditValue() {
      if (this.validValue) {
        this.editFilterValues.filterValidValues.push(this.validValue)
        this.validValue = ''
        console.log(this.editFilterValues)
      }
    },
    editFilter(filterId, subCategoryId) {
      this.showEditFilterForm = !this.showEditFilterForm
      this.editFilterId = filterId
      this.editSubCategoryId = subCategoryId
    },
    async submitEditFilter() {
      const idFilter = this.editFilterId
      const id = this.editSubCategoryId
      const { filterName, filterValidValues } = this.editFilterValues
      if (!filterName) {
        console.log('nist')
        return
      }
      if (!filterValidValues) {
        console.log('nistesh')
        return
      }
      const data = {
        filterName,
        filterValidValues,
      }
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'put',
          url: `${id}/${idFilter}`,
          data: data,
          headers: { authorization: `Bearer ${token}` },
        })
        if (res.status === 200) {
          location.reload()
        }
      } catch (error) {
        console.log(error)
        console.log(error.response.data.msg)
      }
    },
    async submitNewFilter() {
      const id = this.editSubCategoryId
      const { filterName, filterValidValues } = this.editFilterValues
      if (!filterName) {
        console.log('nist')
        return
      }
      if (!filterValidValues) {
        console.log('nistesh')
        return
      }
      const token = localStorage.getItem('authToken')
      const data = {
        filterName,
        filterValidValues,
      }
      try {
        const res = await this.$axios({
          method: 'post',
          url: `${id}/newfilter`,
          data: data,
          headers: { authorization: `Bearer ${token}` },
        })
        if (res.status === 200) {
          location.reload()
        }
      } catch (error) {
        console.log(error)
        console.log(error.response.data.msg)
      }
    },
    async deleteFilter(filterId, subCategoryId) {
      const idFilter = filterId
      const id = subCategoryId
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'delete',
          url: `${id}/${idFilter}`,
          headers: { authorization: `Bearer ${token}` },
        })
        if (res.status === 200) {
          location.reload()
        }
      } catch (error) {
        console.log(error)
        console.log(error.response.data.msg)
      }
    },
    editForm(index = 0) {
      this.showEditForm = !this.showEditForm
      this.currentSelectedIndex = index
      this.editSubCategory.name = ''
    },
    async deleteSubCategory(subCategoryIndex) {
      const id = this.subCategories.subCategories[subCategoryIndex]._id
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'delete',
          url: `/subcategory/${id}`,
          headers: { authorization: `Bearer ${token}` },
        })
        if (res.status === 200) {
          location.reload()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async editSubCategroy() {
      const { name, categoryId } = this.editSubCategory
      if (!name) {
        this.massage = 'Please enter name'
        return
      }
      if (!categoryId) {
        this.massage = 'I just told u to chose a category u dumb pice of shit'
      }
      const data = {
        name,
        categoryId,
      }
      const id = this.subCategories.subCategories[this.currentSelectedIndex]._id
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'put',
          url: `/subcategory/${id}`,
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
.filter-name {
  color: green;
}
.edit-subCategory {
  background-color: #e2c7c7;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 3px 17.4px 10px rgba(0, 0, 0, 0.115),
    24px 139px 80px rgba(0, 0, 0, 0.23);
}
.chose-category-container {
  margin-top: 10px;
  margin-bottom: 10px;
}
.filter-name-and-edit {
  display: flex;
}
</style>
