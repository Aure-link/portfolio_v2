<template>
  <transition name="fade">
    <div v-show="visible" class="top-menu">
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
        <li>
          <span v-on:click="scrollTo('contact')" class="top-menu-link">Contact</span>
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
    scrollTo(anchor) {
      const el = document.getElementsByClassName(anchor + '-section')[0];
      if (el) {
        el.scrollIntoView({block: "start", behavior: "smooth" });
      }
    }
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
}
</style>