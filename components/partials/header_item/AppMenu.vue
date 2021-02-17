<template>
  <div class="top-menu-container">
    <div
      v-on:click="rightMenu"
      v-bind:class="{ opened: showResponsiveMenu }"
      v-if="size"
      class="menu-btn"
    >
      <ion-icon v-if="!showResponsiveMenu" name="menu"></ion-icon>
      <ion-icon v-if="showResponsiveMenu" name="close"></ion-icon>
    </div>
    <transition name="fade">
      <div
        v-if="showResponsiveMenu"
        v-bind:class="{ small: size }"
        v-show="visible"
        class="top-menu"
      >
        <ul>
          <li>
            <span v-on:click="scrollTo('about')" class="top-menu-link"
              >{{ $t('menu.about') }}</span
            >
          </li>
          <li>
            <span v-on:click="scrollTo('skills')" class="top-menu-link"
              >{{ $t('menu.skills') }}</span
            >
          </li>
          <li>
            <span v-on:click="scrollTo('works')" class="top-menu-link"
              >{{ $t('menu.works') }}</span
            >
          </li>
          <li class="lang_selector">
            <div v-for="locale in availableLocales" v-bind:key="locale.code" v-on:click="openLocales" class="actual_local">
              <img v-bind:src="require(`~/assets/img/flags/${locale.code}.svg`)" class="lang_icon">
              <div v-bind:class="{rotate: localVisible}" class="lang_selector-name">
                {{ locale.name }} 
                <ion-icon class="icon" name="chevron-down-outline"></ion-icon>
              </div >
            </div>
            <div v-if="localVisible" class="allLocales">
              <nuxt-link v-for="locale in allLocales" v-bind:key="locale.code" :to="switchLocalePath(locale.code)" class="lang_link">
                <img v-bind:src="require(`~/assets/img/flags/${locale.code}.svg`)" class="lang_icon">
                {{ locale.name }}
              </nuxt-link>
            </div>
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
      showResponsiveMenu: true,
      localVisible: false
    };
  },
  created() {
    window.addEventListener("resize", this.detectSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.detectSize);
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code == this.$i18n.locale);
    },
    allLocales() {
      return this.$i18n.locales
    },
  },
  methods: {
    scrollTop() {
      if (window.outerWidth > 800) {
        this.intervalId = setInterval(() => {
          if (window.pageYOffset === 0) {
            clearInterval(this.intervalId);
          }
          window.scroll(0, window.pageYOffset - 50);
        }, 20);
      } else {
        this.visible = true;
      }
    },
    scrollListener(e) {
      if (window.outerWidth > 800) {
        this.visible = window.scrollY > 50;
        this.localVisible = false
      } else {
        this.visible = true;
      }
    },
    scrollTo(anchor) {
      const el = document.getElementsByClassName(anchor + "-section")[0];
      if (el) {
        el.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    },
    detectSize() {
      if (window.outerWidth <= 800) {
        this.size = true;
        this.showResponsiveMenu = false;
      } else {
        this.size = false;
        this.showResponsiveMenu = true;
      }
    },
    rightMenu() {
      this.showResponsiveMenu = !this.showResponsiveMenu;
    },
    openLocales() {
      this.localVisible = !this.localVisible;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListener);
    this.detectSize(function () {});
    this.scrollListener(function () {});
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style lang="scss" scoped>
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
  color: $white;
  z-index: 11;
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
        color: $grey-2;
        text-transform: uppercase;
        cursor: pointer;
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: $yellow;
          height: 0;
          width: 100%;
          z-index: -1;
          transition: 0.3s;
        }
        &:hover {
          color: $black;
          &::before {
            height: 50%;
          }
        }
      }
      &.lang_selector {
        position: relative;
        padding-right: 0;
      }
    }
    .actual_local {
      display: flex;
      align-items: center;
      color: $grey-2;
      cursor: pointer;
      .lang_icon {
        width: 20px;
        margin-right: 5px;
      }
      .lang_selector-name {
        display: flex;
        align-items: center;
        .icon {
          margin-left: 5px;
          transition: 0.3s;
        }
        &.rotate {
          .icon {
            transform: rotate(180deg);
          }
          }
      }
    }
    .allLocales {
      background-color: $white;
      position: absolute;
      border: 1px solid $black;
      top: 100%;
      margin-top: 10px;
      right: -20px;
      z-index: 10;
      &::after, &::before {
        content: '';
        position: absolute;
        transform: translate(0, -100%);
        width: 0;
        height: 0;
        top: 0;
        right: 10%;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent $black transparent;
        z-index: 1;
      }
      &::before {
        transform: translate(0, -90%);
        border-color: transparent transparent $white transparent;
        z-index: 2;
      }
      .lang_link {
        display: flex;
        align-items: center;
        width: 150px;
        height: 30px;
        box-sizing: border-box;
        padding: 20px;
        color: $black;
        text-transform: inherit;
        transition: 0.3s;
        .lang_icon {
          width: 20px;
          margin-right: 5px;
        }
        &:hover {
          background-color: $grey-1;
        }
      }
      @media screen and (max-width: 800px) {
        position: relative;
        top: inherit;
        right: inherit;
        border: none;
        &::before, &::after {
          content: none;
        }
        .lang_link {
          padding-left: 0;
          &:first-child {
            border-top: 1px solid $grey-2;
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
    background: $white;
    z-index: 10;
    ul {
      flex-direction: column;
      align-items: flex-start;
      li {
        padding: 15px 0;
        .top-menu-link {
          color: $black;
        }
      }
    }
  }
}
</style>