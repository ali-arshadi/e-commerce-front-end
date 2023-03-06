<template>
  <div>
    <div class="home-page-categories">
      <div class="men-categories-container">
        <NuxtLink to="/category/Men"
          ><div class="category-image">
            <img
              src="~/static/2b6c4edd120d4abf5cb3802b27803cc3.jpg"
              alt="men"
              class="men-categories"
            />
          </div>
          <p class="img-title">Men</p></NuxtLink
        >
      </div>
      <div class="kids-categories-container">
        <NuxtLink to="/category/Kids">
          <div class="category-image">
            <img
              src="~/static/3f81d737885523ad36664901be9c965f.jpg"
              alt="kids"
              class="kids-categories"
            />
          </div>
          <p class="img-title">Kids</p>
        </NuxtLink>
      </div>
      <div class="women-categories-container">
        <NuxtLink to="/category/Women">
          <div class="category-image">
            <img
              src="~/static/8906d69193f200fe019f84dd3db06a28.jpg"
              alt="women"
              class="women-categories"
            />
          </div>
          <p class="img-title">Women</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.home-page-categories {
  background-color: rgba($color: white, $alpha: 0.4);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  border-radius: 3px;
}
.men-categories-container {
  text-align: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
  }
}
.kids-categories-container {
  text-align: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
  }
}
.women-categories-container {
  text-align: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
  }
}
.category-image {
  height: 80px;
  width: 80px;
}
@media only screen and (min-width: 992px) {
  .home-page-categories {
    padding: 20px;
  }
  .category-image {
    width: 120px;
    height: 120px;
  }
  .men-categories-container {
    p {
      font-size: 1.5em;
      margin-top: 5px;
    }
  }
  .women-categories-container {
    p {
      font-size: 1.5em;
      margin-top: 5px;
    }
  }
  .kids-categories-container {
    p {
      font-size: 1.5em;
      margin-top: 5px;
    }
  }
}
</style>
