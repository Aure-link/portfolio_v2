<template>
  <div class="logo">
    <NuxtLink to="/">Aurélien</NuxtLink>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  .logo {
    a {
      font-style: italic;
      font-weight: 600;
      font-size: 35px;
      color: #fff;
      transition: 0.3s;
      &.scroll {
        color: #292929;
      }
    }
  }
  &.active {
    .logo {
      a {
        color: #292929;
      }
    }
  }
}
</style>