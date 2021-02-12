<template>
  <div class="slide-section slide">
    <div class="main-title">{{ $t('slide.title') }}</div>
    <div v-on:click="scrollToElement" class="scoll_bot">
      <ion-icon name="chevron-down-outline" class="icon"></ion-icon>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToElement() {
      const el = document.getElementsByClassName("about-section")[0];
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slide {
  background-image: url("~assets/img/slide-bg.jpg");
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .main-title {
    color: #fff;
    font-size: 100px;
    font-weight: 600;
    letter-spacing: -3px;
    @media screen and (max-width: 1200px) {
      font-size: 85px;
      text-align: center;
    }
    @media screen and (max-width: 800px) {
      font-size: 50px;
      letter-spacing: initial;
    }
  }
  .scoll_bot {
    position: absolute;
    left: 50%;
    bottom: 2%;
    transform: translate(0, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer; 
    animation: jiggle 1s infinite;
    .icon {
      font-size: 45px;
      color: #fff;
    }
  }
  @keyframes jiggle {
    from {
      bottom: 2%;
    }
    50% {
      bottom: 3%;
    }
    to {
      bottom: 2%;
    }
  }
}
</style>