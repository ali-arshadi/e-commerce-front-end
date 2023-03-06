<template>
  <div>
    <div class="new-category-wrapper">
      <button
        class="add-new-category-button"
        v-if="!showButton"
        @click="showAddProduct"
      >
        Add product
      </button>
      <button
        class="add-new-category-button"
        v-if="showButton"
        @click="showAddProduct"
      >
        Cancel
      </button>
      <form
        v-if="showButton"
        class="new-category-form-wrapper subCategory-form"
      >
        <p>please choose a sub category</p>
        <div
          class="choose-category-wrapper"
          v-for="subCategory in subCategories.subCategories"
          :key="subCategory.index"
        >
          <button @click.prevent="getSingleSubCategory(subCategory._id)">
            {{ subCategory.name }}
          </button>
        </div>
        <div class="product-infos" v-if="showProductForm">
          <input
            type="text"
            placeholder="New Product title"
            class="new-category-input"
            v-model="productInfo.name"
          />
          <input
            type="text"
            placeholder="New Product description"
            class="new-category-input"
            v-model="productInfo.description"
          />
          <input
            type="number"
            placeholder="New Product price"
            class="new-category-input"
            v-model="productInfo.price"
            min="0"
          />
          <input
            type="number"
            placeholder="discount(optional)"
            class="new-category-input"
            v-model="productInfo.discount"
            min="0"
            max="100"
          />
          <ul
            class="filters-to-choose"
            v-for="filter in filters"
            :key="filter.index"
          >
            <p>{{ filter.filterName }}</p>
            <div
              class="filter-valid-vlaues-wrapper"
              v-for="filterValidValue in filter.filterValidValues"
              :key="filterValidValue.index"
            >
              <input
                type="radio"
                :id="filterValidValue"
                :name="filter.filterName"
                :value="filterValidValue"
                @click="setDetail(filter.filterName, filterValidValue)"
              />
              <label :for="filterValidValue">{{ filterValidValue }}</label>
            </div>
          </ul>
        </div>
        <button class="submit-category-form" @click.prevent="submitProductForm">
          submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
      showProductForm: false,
      filters: [],
      productInfo: {
        name: '',
        description: '',
        price: null,
        discount: null,
        categoryId: '',
        subCategoryId: '',
        details: {},
      },
    }
  },
  computed: {
    //geting categories from store
    categories() {
      return this.$store.state.categories.categories
    },
    //geting subCategories from store
    subCategories() {
      return this.$store.state.subCategories.subCategories
    },
  },
  methods: {
    showAddProduct() {
      this.showButton = !this.showButton
    },
    //geting singleSubCategory to have access to the filters
    async getSingleSubCategory(id) {
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'get',
          url: `/subcategory/${id}`,
          headers: { authorization: `Bearer ${token}` },
        })
        if (res.status === 200) {
          console.log(res.data)
          this.filters = res.data.subCategory.filters
          this.productInfo.categoryId = res.data.subCategory.Category
          this.productInfo.subCategoryId = res.data.subCategory._id
          this.showProductForm = true
        }
      } catch (error) {
        console.log(error)
      }
    },
    setDetail(filterName, filterValidValue) {
      this.productInfo.details[filterName.toString()] = filterValidValue
      console.log(this.productInfo)
    },
    async submitProductForm() {
      const token = localStorage.getItem('authToken')
      const {
        name,
        description,
        price,
        discount,
        categoryId,
        subCategoryId,
        details,
      } = this.productInfo
      if (!name) {
        console.log('please enter a name')
        return
      }
      if (!description) {
        console.log('enter desctiption')
        return
      }
      if (!price) {
        console.log('enter price')
        return
      }
      const data = {
        name,
        description,
        price,
        discount,
        categoryId,
        subCategoryId,
        details,
      }
      try {
        const res = await this.$axios({
          method: 'post',
          url: '/products',
          data: data,
          headers: { authorization: `Bearer ${token}` },
        })
        if (res.status === 200) {
          location.reload()
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style></style>
