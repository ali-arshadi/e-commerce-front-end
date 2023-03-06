<template>
  <div>
    <div
      class="admin-panel-category-container"
      v-for="(product, index) in products.products"
      :key="index"
    >
      <p>{{ product.name }}</p>
      <p>Category : {{ product.category.name }}</p>
      <p>{{ product.description }}</p>
      <p>price: ${{ product.price }}</p>
      <p v-if="product.discount">discount: {{ product.discount }}%</p>
      <p v-for="(value, name) in product.details" :key="name">
        {{ name }} : {{ value }}
      </p>
      <div class="admin-panel-controls-wrapper">
        <button @click="deleteProduct(index)">Delete</button>
        <button @click="editForm(index)">Edit</button>
      </div>
    </div>
    <div class="edit-form-wrapper" v-if="showEditForm">
      <form class="edit-product">
        <input
          type="text"
          placeholder="name"
          v-model="editProductForm.name"
          class="edit-form-input width-extend"
        />
        <input
          type="text"
          placeholder="Description"
          v-model="editProductForm.description"
          class="edit-form-input width-extend"
        />
        <input
          type="number"
          min="0"
          placeholder="Price"
          v-model="editProductForm.price"
          class="edit-form-input width-extend"
        />
        <input
          type="number"
          min="0"
          max="100"
          placeholder="dicount %(optional)"
          v-model="editProductForm.discount"
          class="edit-form-input width-extend"
        />
        <div class="chose-category-container">
          <p>chose a category</p>
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
              v-model="editProductForm.categoryId"
            />
            <label :for="category._id">{{ category.name }}</label>
          </div>
        </div>
        <div class="edit-form-buttons-wrapper">
          <button class="edit-form-button" @click="editProduct()">
            Submit
          </button>
          <button class="edit-form-button" @click="editForm()">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSelectedIndex: 0,
      showEditForm: false,
      editProductForm: {
        name: '',
        description: '',
        price: null,
        discount: null,
        categoryId: '',
      },
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories.categories
    },
    products() {
      return this.$store.state.siteProducts.products
    },
  },
  methods: {
    editForm(index = 0) {
      this.showEditForm = !this.showEditForm
      this.currentSelectedIndex = index
      this.editProductForm.name = ''
      this.editProductForm.description = ''
      this.editProductForm.price = null
      this.editProductForm.discount = null
      this.editProductForm.categoryId = ''
    },
    async deleteProduct(productIndex) {
      const id = this.products.products[productIndex]._id
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'delete',
          url: `/products/${id}`,
          headers: { authorization: `Bearer ${token}` },
        })
        if (res.status === 200) {
          location.reload()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async editProduct() {
      const { name, description, price, discount, categoryId } =
        this.editProductForm
      if (!name) {
        console.log('enter name')
        return
      }
      if (!description) {
        console.log('enter description')
        return
      }
      if (!price) {
        console.log('enter price')
        return
      }
      if (!categoryId) {
        console.log('select category')
        return
      }
      const data = {
        name,
        description,
        price,
        discount,
        categoryId,
      }
      const id = this.products.products[this.currentSelectedIndex]._id
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'put',
          url: `/products/${id}`,
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

<style lang="scss">
.edit-product {
  background: #e2c7c7;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 3px 17.4px 10px rgba(0, 0, 0, 0.115),
    24px 139px 80px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
}
</style>
