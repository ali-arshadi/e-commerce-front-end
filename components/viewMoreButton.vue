<template>
  <div>
    <div class="view-more-wrapper">
      <a href="#"
        >view more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="16"
          viewBox="0 0 8 16"
        >
          <path
            id="Path_4"
            data-name="Path 4"
            d="M4,.5,11.187,8,4,15.479,4.31,16,12,8,4.3,0Z"
            transform="translate(-4)"
            fill="#16597f"
            fill-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.view-more-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a {
    text-decoration: none;
    color: #16597f;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 5px;
    }
  }
}
</style>
