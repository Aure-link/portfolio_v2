<template>
  <div v-bind:class="{ active: visible }" class="header">
    <div class="container">
      <logo />
      <app-menu />
    </div>
    <div class="progress"></div>
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
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 20);
    },
    scrollListener(e) {
      this.visible = window.scrollY > 50;
    },
    progress() {
      let pageHeight = document.documentElement.scrollHeight - window.innerHeight
      let position = window.scrollY
      let pageWidth = document.documentElement.clientWidth
      let progressWidth = position / pageHeight * pageWidth

      document.querySelector('.progress').style.width = progressWidth+"px"
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListener);
    window.addEventListener("scroll", this.progress);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style lang="scss" scoped>
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
    background-color: $white;
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
  .progress {
    background-color: $yellow;
    height: 3px;
    width: 0;
    position: fixed;
    z-index: 2;
    left: 0;
  }
}
.dark-mode {
  .header {
    &.active {
      background-color: $darkwhite;
    }
    .progress {
    background-color: $darkyellow;
    }
  }
}
</style>