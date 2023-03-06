<template>
  <div>
    <div class="header-wrapper">
      <NuxtLink to="/">Shop</NuxtLink>
      <div class="pages-link-wrapper">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/category/Men">Men</NuxtLink>
        <NuxtLink to="/category/Women">Women</NuxtLink>
        <NuxtLink to="/category/Kids">Kids</NuxtLink>
      </div>
      <div class="svgs-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            id="Path_19"
            data-name="Path 19"
            d="M15.853,16.56a9.506,9.506,0,1,1,.707-.707L24,23.293,23.293,24l-7.44-7.44ZM9.5,1A8.5,8.5,0,1,1,1,9.5,8.5,8.5,0,0,1,9.5,1Z"
            fill-rule="evenodd"
          />
        </svg>
        <nuxt-link to="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23.999"
            height="24"
            viewBox="0 0 23.999 24"
          >
            <path
              id="Path_20"
              data-name="Path 20"
              d="M12,0C6.917,0,3.535,4.949,8.267,13.678c1.6,2.945-1.725,3.641-5.09,4.418C.1,18.805-.01,20.331,0,23l0,1h23.99l0-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418C20.45,4.766,16.982,0,12,0m0,1a4.683,4.683,0,0,1,4.225,2.15c1.354,2.251.866,5.824-1.377,10.06a3.235,3.235,0,0,0-.283,2.932c.937,2.049,4.758,2.632,6.032,2.928,2.3.534,2.412,1.313,2.4,3.93H1c-.01-2.615.09-3.4,2.4-3.93,1.157-.266,5.138-.919,6.049-2.94a3.213,3.213,0,0,0-.3-2.929C6.915,9.086,6.4,5.437,7.741,3.189A4.7,4.7,0,0,1,12,1"
              transform="translate(0)"
              fill-rule="evenodd"
            />
          </svg>
        </nuxt-link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="22"
          viewBox="0 0 24 22"
        >
          <path
            id="Path_7"
            data-name="Path 7"
            d="M12,21.593C6.37,16.054,1,11.3,1,7.191A5.059,5.059,0,0,1,6.281,2C7.593,2,10.432,2.5,12,6.457c1.59-3.968,4.464-4.447,5.726-4.447A5.014,5.014,0,0,1,23,7.191c0,4.069-5.136,8.625-11,14.4M17.726,1.01A6.535,6.535,0,0,0,12,4.248,6.526,6.526,0,0,0,6.281,1,6.044,6.044,0,0,0,0,7.191C0,11.852,5.571,16.62,12,23c6.43-6.38,12-11.148,12-15.809A6.028,6.028,0,0,0,17.726,1.01"
            transform="translate(0 -1)"
            fill-rule="evenodd"
          />
        </svg>
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
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: black;
  font-size: 1.1em;
}
.header-wrapper {
  padding: 30px 120px 30px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eeedeb;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}
.pages-link-wrapper {
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.svgs-wrapper {
  display: flex;
  width: 15%;
  align-items: center;
  justify-content: space-around;
}
@media only screen and (min-width: 992px) {
  .pages-link-wrapper {
    margin-left: 90px;
  }
}
@media only screen and (min-width: 1200px) {
  .pages-link-wrapper {
    margin-left: 150px;
  }
}
</style>
