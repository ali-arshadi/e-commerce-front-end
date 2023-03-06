<template>
  <div>
    <div class="site-offer">
      <span>Become a member and get</span>
      <span class="highlight">10% off</span>
      <span>in your first buy</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.site-offer {
  padding: 10px;
  background-color: rgba($color: white, $alpha: 0.4);
  text-align: center;
  border-radius: 3px;
  span {
    font-size: 2em;
    margin-left: 5px;
    font-weight: 400;
    line-height: 60px;
  }
}
.highlight {
  color: red;
}
</style>
