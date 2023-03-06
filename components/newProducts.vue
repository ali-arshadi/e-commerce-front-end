<template>
  <div>
    <div class="new-products-wrapper">
      <div class="new-products-container">
        <div class="product">
          <div class="product-image">
            <img
              src="~/static/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg"
              alt="T-shirt"
            />
          </div>
          <p v-if="newProducts.first">{{ newProducts.first }}</p>
        </div>
        <div class="product">
          <div class="product-image">
            <img
              src="~/static/Men's Carnaby Leather Sneakers.png"
              alt="Sneakers"
            />
          </div>
          <p v-if="newProducts.second">{{ newProducts.second }}</p>
        </div>
        <div class="product">
          <div class="product-image">
            <img
              src="~/static/07b70d27f6a86dae53ba6802eb3934a4.jpg"
              alt="Dress"
            />
          </div>
          <p v-if="newProducts.third">{{ newProducts.third }}</p>
        </div>
        <div class="product">
          <div class="product-image">
            <img
              src="~/static/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg"
              alt="Suit"
            />
          </div>
          <p v-if="newProducts.fourth">{{ newProducts.fourth }}</p>
        </div>
      </div>
      <div class="view-more-wrapper">
        <ViewMoreButton />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newProducts: {
        first: 'T-shirt',
        second: 'Sneakers',
        third: 'Dress',
        fourth: 'Suit',
      },
    }
  },
}
</script>

<style lang="scss">
.new-products-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba($color: white, $alpha: 0.4);
  padding: 10px;
  border-radius: 3px;
}
.new-products-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.product {
  text-align: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
  }
}
.product-image {
  height: 80px;
  width: 80px;
}
.view-more-wrapper {
  margin-top: 10px;
}
@media only screen and (min-width: 992px) {
  .new-products-container {
    padding: 20px;
  }
  .product-image {
    width: 120px;
    height: 120px;
  }
  .product {
    p {
      font-size: 1.5em;
      margin-top: 5px;
    }
  }
}
</style>
