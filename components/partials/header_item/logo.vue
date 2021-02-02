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
      font-family: 'Lobster';
      font-size: 35px;
      color: #fff;
      transition: 0.3s;
      text-transform: initial;
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