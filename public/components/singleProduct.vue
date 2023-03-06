<template>
  <div>
    <div class="single-product-contatiner">
      <div class="single-product-image-wrapper">
        <img
          :src="singleProduct[0].image.src"
          :alt="singleProduct[0].image.alt"
          v-if="singleProduct[0].image"
        />
      </div>
      <div class="single-product-info-container">
        <h2 class="single-product-name">{{ singleProduct[0].title }}</h2>
        <p class="single-product-price">{{ singleProduct[0].price }}</p>
        <p class="single-product-description">
          {{ singleProduct[0].description }}
        </p>
        <div class="add-fav-container">
          <div class="add-to-shop">
            <p>Add</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                id="Path_17"
                data-name="Path 17"
                d="M20.331,9.5a5.087,5.087,0,0,0-4.887,5.13V17.5H9.077c-.178,0-.355,0-.444.151a.519.519,0,0,0-.148.453l2.221,12.377A3.634,3.634,0,0,0,14.2,33.5H26.756a3.665,3.665,0,0,0,3.495-3.049L32.471,18.1a.519.519,0,0,0-.148-.453.527.527,0,0,0-.444-.151H25.512V14.633a5.181,5.181,0,0,0-1.527-3.681A4.982,4.982,0,0,0,20.331,9.5Zm.259,1.207a3.89,3.89,0,0,1,3.738,3.923V17.5h-7.7V14.633A3.962,3.962,0,0,1,17.8,11.817,3.81,3.81,0,0,1,20.59,10.71Zm-10.8,8H31.168L29.066,30.3a2.383,2.383,0,0,1-2.31,1.992H14.2A2.383,2.383,0,0,1,11.89,30.3Zm6.231,2.868a.6.6,0,0,0-.575.6v1.811a.592.592,0,1,0,1.185,0V22.18a.61.61,0,0,0-.18-.433A.586.586,0,0,0,16.018,21.576Zm8.884,0a.6.6,0,0,0-.575.6v1.811a.592.592,0,1,0,1.185,0V22.18a.61.61,0,0,0-.18-.433A.586.586,0,0,0,24.9,21.576Z"
                transform="translate(-8.478 -9.501)"
                fill="#fff"
              />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="32"
            viewBox="0 0 34 32"
          >
            <path
              id="Path_7"
              data-name="Path 7"
              d="M17,30.953C9.024,22.9,1.417,15.976,1.417,10.005A7.25,7.25,0,0,1,8.9,2.455c1.859,0,5.881.729,8.1,6.483,2.253-5.772,6.324-6.468,8.112-6.468a7.189,7.189,0,0,1,7.472,7.536c0,5.919-7.276,12.545-15.583,20.948M25.112,1.015A9.209,9.209,0,0,0,17,5.724,9.2,9.2,0,0,0,8.9,1,8.669,8.669,0,0,0,0,10.005C0,16.785,7.892,23.72,17,33c9.109-9.28,17-16.215,17-22.995a8.646,8.646,0,0,0-8.888-8.991"
              transform="translate(0 -1)"
              fill="#6b7280"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['singleProduct'],
}
</script>

<style lang="scss">
.single-product-contatiner {
  display: flex;
  flex-direction: column;
}
.single-product-image-wrapper {
  width: fit-content;
  height: fit-content;
  img {
    width: 100%;
    height: 100%;
  }
}
.single-product-info-container {
  margin-top: 35px;
  background-color: rgba($color: white, $alpha: 0.4);
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.single-product-name {
  font-size: 1.3em;
  font-weight: 500;
}
.single-product-price {
  font-size: 1.1em;
  font-weight: 200;
  margin-top: 25px;
  letter-spacing: 1px;
}
.single-product-description {
  font-size: 1.1em;
  font-weight: 200;
  margin-top: 35px;
}
.add-fav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
}
.add-to-shop {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 3px;
  background-color: #e2c7c7;
  p {
    color: white;
    margin-right: 10px;
  }
}
</style>
