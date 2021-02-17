<template>
  <div class="logo">
    <span v-on:click="scrollTo('slide')" class="logo">Aurélien</span>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTo(anchor) {
    const el = document.getElementsByClassName(anchor + '-section')[0];
    console.log(el)
    if (el) {
      el.scrollIntoView({block: "start", behavior: "smooth" });
    }
  }
  }
};
</script>

<style lang="scss">
.header {
  .logo {
      font-family: 'Lobster';
      font-size: 35px;
      color: $white;
      transition: 0.3s;
      text-transform: initial;
      cursor: pointer;
  }
  &.active {
    .logo {
        color: $black;
    }
  }
}
</style>