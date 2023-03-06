<template>
  <div>
    <NuxtLink :to="`/search/${subCategory.title}`">
      <div class="categories-container">
        <div class="category-image-wrapper">
          <img
            :src="subCategory.image.url"
            :alt="subCategory.image.alt"
            v-if="subCategory.image"
          />
        </div>
        <p>{{ subCategory.title }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['subCategory'],
}
</script>
<style lang="scss">
.categories-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: white, $alpha: 0.4);
  border-radius: 3px;
  p {
    padding: 10px;
  }
}
.category-image-wrapper {
  width: fit-content;
  height: fit-content;
  border-radius: 3px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 3px;
  }
}
</style>
