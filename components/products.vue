<template>
  <div>
    <NuxtLink :to="`/products/${product.title}`">
      <div class="products-container">
        <div class="product-image-wrapper">
          <img
            :src="product.image.src"
            :alt="product.image.alt"
            v-if="product.image"
          />
        </div>
        <div class="product-description-container">
          <p>{{ product.title }}</p>
          <div class="price-fac-container">
            <p>{{ product.price }}</p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['product'],
}
</script>

<style lang="scss">
.products-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: white, $alpha: 0.4);
  border-radius: 3px;
}
.product-image-wrapper {
  width: fit-content;
  height: fit-content;
  border-radius: 3px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    object-fit: cover;
    object-position: top;
  }
}
.product-description-container {
  padding: 10px;
}
</style>
