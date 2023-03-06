<template>
  <div>
    <div class="footer-wrapper">
      <div class="home-container">
        <NuxtLink to="/"><h1>Home</h1></NuxtLink>
      </div>
      <div class="shop-container">
        <h1>Shop</h1>
        <div class="shop-categories-wrapper">
          <NuxtLink to="/Category/Men">Men</NuxtLink>
          <NuxtLink to="/Category/Women">Women</NuxtLink>
          <NuxtLink to="/Category/Kids ">Kids</NuxtLink>
        </div>
      </div>
      <div class="contact-us-container">
        <h1>Contact us</h1>
        <div class="location-wrapper">
          <p>locatino:</p>
          <p>askdajf sdal kfjasd ksjfda</p>
        </div>
        <div class="social-media-links-wrapper">
          <a href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                id="Path_21"
                data-name="Path 21"
                d="M9,1.622c2.4,0,2.688.009,3.638.053,2.439.111,3.578,1.268,3.689,3.689.043.949.052,1.234.052,3.637s-.009,2.688-.052,3.637c-.112,2.419-1.248,3.578-3.689,3.689-.95.043-1.233.052-3.638.052s-2.688-.009-3.637-.052c-2.445-.112-3.578-1.274-3.689-3.69C1.63,11.688,1.622,11.4,1.622,9s.01-2.687.052-3.637c.112-2.42,1.248-3.578,3.689-3.689C6.313,1.631,6.6,1.622,9,1.622ZM9,0C6.556,0,6.25.01,5.29.054,2.021.2.2,2.017.055,5.289.01,6.25,0,6.556,0,9s.011,2.751.054,3.711C.2,15.979,2.017,17.8,5.289,17.946,6.25,17.99,6.556,18,9,18s2.751-.01,3.711-.054c3.265-.15,5.087-1.963,5.234-5.235C17.99,11.751,18,11.444,18,9s-.01-2.75-.054-3.71C17.8,2.024,15.983.2,12.712.055,11.751.01,11.444,0,9,0ZM9,4.378A4.622,4.622,0,1,0,13.622,9,4.622,4.622,0,0,0,9,4.378ZM9,12a3,3,0,1,1,3-3A3,3,0,0,1,9,12Zm4.8-8.884A1.08,1.08,0,1,0,14.884,4.2,1.08,1.08,0,0,0,13.8,3.116Z"
              /></svg
          ></a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
            >
              <path
                id="Path_22"
                data-name="Path 22"
                d="M18,4.142a6.887,6.887,0,0,1-2.121.636A4,4,0,0,0,17.5,2.543a7.026,7.026,0,0,1-2.345.98,3.548,3.548,0,0,0-2.7-1.276,3.969,3.969,0,0,0-3.6,4.959,10.216,10.216,0,0,1-7.611-4.22A4.28,4.28,0,0,0,2.4,8.38,3.441,3.441,0,0,1,.724,7.875a3.978,3.978,0,0,0,2.962,4.011,3.394,3.394,0,0,1-1.668.069,3.754,3.754,0,0,0,3.45,2.8A6.977,6.977,0,0,1,0,16.433a9.815,9.815,0,0,0,5.661,1.815c6.857,0,10.73-6.334,10.5-12.015A7.948,7.948,0,0,0,18,4.142Z"
                transform="translate(0 -2.248)"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
            >
              <path
                id="Path_23"
                data-name="Path 23"
                d="M3.735,2.848A1.86,1.86,0,1,1,1.875,1,1.854,1.854,0,0,1,3.735,2.848ZM3.75,6.174H0V18H3.75Zm5.986,0H6.01V18H9.737V11.792c0-3.452,4.522-3.734,4.522,0V18H18V10.512C18,4.688,11.309,4.9,9.736,7.767V6.174Z"
                transform="translate(0 -1)"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="18"
              viewBox="0 0 8 18"
            >
              <path
                id="Path_24"
                data-name="Path 24"
                d="M8,6H6V9H8v9h3.333V9h2.428L14,6H11.333V4.75c0-.716.128-1,.743-1H14V0H11.461C9.064,0,8,1.187,8,3.461Z"
                transform="translate(-6)"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer-wrapper {
  background-color: #eeedeb;
  padding: 35px;
  display: flex;
  flex-direction: column;
}
.shop-container {
  margin-top: 35px;
}
.shop-categories-wrapper {
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.contact-us-container {
  margin-top: 35px;
}
.location-wrapper {
  margin-top: 35px;
  display: flex;
  align-items: center;
}
.social-media-links-wrapper {
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media only screen and (min-width: 992px) {
  .footer-wrapper {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 35px 60px 35px 60px;
  }
  .shop-container {
    margin-top: 0;
  }
  .contact-us-container {
    margin-top: 0;
  }
  .shop-categories-wrapper {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 20px;
    a {
      margin-bottom: 20px;
    }
  }
}
</style>
