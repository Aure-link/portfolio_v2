<template>
  <transition name="fade">
    <div v-show="visible" class="top-menu">
      <ul>
        <li>
          <a class="top-menu-link" href="#about-section">About</a>
        </li>
        <li>
          <a class="top-menu-link" href="#services-section">What I do</a>
        </li>
        <li>
          <a class="top-menu-link" href="#works-section">Works</a>
        </li>
        <li>
          <a class="top-menu-link" href="#contact-section">Contact</a>
        </li>
      </ul>
    </div>
  </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.top-menu {
  ul {
    display: flex;
    align-items: center;
    li {
      padding: 10px 20px;
      .top-menu-link {
        font-weight: 600;
        font-size: 16px;
        position: relative;
        letter-spacing: 3px;
        transition: 0.3s;
        z-index: 1;
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: #fdd914;
          height: 0;
          width: 100%;
          z-index: -1;
          transition: 0.3s;
        }
        &:hover {
          color: #292929;
          &::before {
            height: 50%;
          }
        }
      }
    }
  }
}
</style>