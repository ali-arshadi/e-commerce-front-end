<template>
  <div>
    <div class="new-category-wrapper">
      <button
        class="add-new-category-button"
        v-if="!this.showButton"
        @click="showAddSubCategory()"
      >
        Add subCategory
      </button>
      <button
        class="add-new-category-button"
        v-if="this.showButton"
        @click="showAddSubCategory()"
      >
        Cancel
      </button>
      <form
        v-if="this.showButton"
        class="new-category-form-wrapper subcategory-form"
      >
        <input
          type="text"
          placeholder="New subCategory title"
          class="new-category-input"
          v-model="subCategoryInfo.name"
        />
        <p>Please choose a category</p>
        <div
          class="choose-category-wrapper"
          v-for="(category, index) in categories.categories"
          :key="index"
        >
          <input
            type="radio"
            :id="category._id"
            name="categoryName"
            :value="category._id"
            v-model="subCategoryInfo.categoryId"
          />
          <label :for="category._id">{{ category.name }}</label>
        </div>
        <button
          class="submit-category-form"
          v-if="!showFilterForm"
          @click.prevent="showAddFilter"
        >
          Add filter
        </button>
        <button
          class="submit-category-form"
          v-if="showFilterForm"
          @click.prevent="showAddFilter"
        >
          Cancel
        </button>
        <form class="filter-form" v-if="showFilterForm">
          <div class="filter-input">
            <input
              type="text"
              placeholder="Filter"
              v-model="filterName"
              class="new-category-input"
            />
          </div>
          <div class="value-input">
            <input
              type="text"
              placeholder="value"
              v-model="value"
              class="new-category-input"
            />
            <button class="submit-category-form" @click.prevent="addValue">
              Add value
            </button>
          </div>
          <button
            class="submit-category-form"
            @click.prevent="submitFilterForm"
          >
            Add new filter
          </button>
        </form>
        <button
          class="submit-category-form"
          @click.prevent="submitSubCategoryForm"
          v-if="!showFilterForm"
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
      showFilterForm: false,
      showButton: false,
      currentSelectedIndex: 0,
      massage: '',
      filterName: '',
      value: '',
      filtersForm: {
        filterName: '',
        filterValidValues: [],
      },
      subCategoryInfo: {
        categoryId: '',
        name: '',
        filters: [],
      },
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories.categories
    },
  },
  methods: {
    submitFilterForm() {
      if (this.filterName && this.filtersForm.filterValidValues.length > 0) {
        this.filtersForm.filterName = this.filterName
        this.subCategoryInfo.filters.push(this.filtersForm)
        this.filtersForm = { filterName: '', filterValidValues: [] }
        this.filterName = ''
        this.showFilterForm = false
        console.log(this.subCategoryInfo.filters)
      }
    },
    addValue() {
      if (this.value) {
        this.filtersForm.filterValidValues.push(this.value)
        this.value = ''
        console.log(this.filtersForm.filterValidValues)
        this.massage = 'value added'
      } else {
        this.massage = 'type value'
      }
    },
    showAddFilter() {
      this.showFilterForm = !this.showFilterForm
    },
    showAddSubCategory() {
      this.showButton = !this.showButton
      this.subCategoryInfo.categoryId = ''
      this.subCategoryInfo.name = ''
      this.massage = ''
    },
    async submitSubCategoryForm() {
      const { name, categoryId, filters } = this.subCategoryInfo
      if (!name) {
        this.massage = 'u cant create subCategory without typing a name u idiot'
        return
      }
      if (!categoryId) {
        this.massage = 'select a category idiot'
        return
      }
      const data = {
        name,
        categoryId,
        filters,
      }
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'post',
          url: '/subcategory',
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
.subcategory-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.subcategory-form {
  align-items: initial;
}
.filter-form {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
</style>
