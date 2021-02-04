<template>
<div class="top-menu-container">
  <div v-on:click="rightMenu" v-bind:class="{opened : showResponsiveMenu}" v-if="size" class="menu-btn">
    <ion-icon v-if="!showResponsiveMenu" name="menu"></ion-icon>
    <ion-icon v-if="showResponsiveMenu" name="close"></ion-icon>
  </div>
  <transition name="fade">
    <div v-if="showResponsiveMenu" v-bind:class="{small : size}" v-show="visible" class="top-menu">
      <ul>
        <li>
          <span v-on:click="scrollTo('about')" class="top-menu-link">About</span>
        </li>
        <li>
          <span v-on:click="scrollTo('skills')" class="top-menu-link">What I do</span>
        </li>
        <li>
          <span v-on:click="scrollTo('works')" class="top-menu-link">Works</span>
        </li>
      </ul>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      size: true,
      showResponsiveMenu: true
    }
  },
  created () {
    window.addEventListener("resize", this.detectSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.detectSize);
  },
  methods: {
    scrollTop() {
      if ((window.outerWidth) > 750) {
        this.intervalId = setInterval(() => {
          if (window.pageYOffset === 0) {
            clearInterval(this.intervalId);
          }
          window.scroll(0, window.pageYOffset - 50);
        }, 20);
      } else {
        this.visible = true
      }
    },
    scrollListener(e) {
      if ((window.outerWidth) > 750) {
        this.visible = window.scrollY > 50;
      } else {
        this.visible = true
      }
    },
    scrollTo(anchor) {
      const el = document.getElementsByClassName(anchor + '-section')[0];
      if (el) {
        el.scrollIntoView({block: "start", behavior: "smooth" });
      }
    },
    detectSize() {
      if ((window.outerWidth) <= 750) {
        this.size = true
        this.showResponsiveMenu = false
      }
      else {
        this.size = false
        this.showResponsiveMenu = true
      }
    },
    rightMenu() {
      this.showResponsiveMenu = !this.showResponsiveMenu
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListener);
    this.detectSize(function() {})
    this.scrollListener(function() {})
  },
  beforeDestroy() {
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
.menu-btn {
  width: 35px;
  height: 35px;
  color: #fff;
  z-index: 1;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &.opened {
    color: #000;
  }
}
.header {
  &.active {
    .menu-btn {
      color: #000;
    }
  }
}
.top-menu {
  ul {
    display: flex;
    align-items: center;
    li {
      padding: 10px 20px;
      .top-menu-link {
        font-weight: 500;
        font-size: 15px;
        position: relative;
        letter-spacing: 3px;
        transition: 0.3s;
        z-index: 1;
        color: #999999;
        text-transform: uppercase;
        cursor: pointer;
        &::before {
          content: "";
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
  &.small {
    padding: 50px 30px;
    position: fixed;
    top: 0;
    right: 0;
    width: 230px;
    height: 100%;
    background: #ffffff;
    ul {
      flex-direction: column;
      align-items: flex-start;
      li {
        padding: 15px 0;
        .top-menu-link {
          color: #292929;
        }
      }
    }
  }
}
</style>