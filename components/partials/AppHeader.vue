<template>
  <div v-bind:class="{ active: visible }" class="header">
    <div class="container">
      <logo />
      <menu-btn />
      <app-menu />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 20);
    },
    scrollListener: function (e) {
      this.visible = window.scrollY > 50;
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style lang="scss">
.header {
  height: 105px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.3s;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 100%);
    transition: 0.3s;
  }
  &.active {
    background-color: white;
    height: 90px;
    box-shadow: 0 25px 50px rgb(0 0 0 / 5%);
    &::before {
      background: none;
    }
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
}
</style>