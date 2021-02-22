<template>
  <div class="skills-section section-grey content-section">
    <div class="container">
      <div class="skills-section-title section-title">{{ $t('skills.title') }}</div>
      <div class="skills-section-content">
        <div
          v-for="skill in skills"
          v-bind:key="skill.id"
          class="skills-section-content-item"
        >
          <div
            v-html="skill.logo"
            class="skills-section-content-item-logo"
          ></div>
          <div class="skills-section-content-item-title">
            {{ skill.title }}
          </div>
          <div class="skills-section-content-item-content">
            {{ skill.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    skills() {
      return this.$t('skills.item')
    }
  }
};
</script>

<style lang="scss" scoped>
.skills-section {
  padding: 120px 0;
  .container {
    .skills-section-content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      flex-flow: wrap;
      .skills-section-content-item {
        width: 30%;
        max-width: 30%;
        margin: 20px 0;
        .skills-section-content-item-logo {
          font-size: 44px;
          line-height: 48px;
          color: $yellow;
        }
        .skills-section-content-item-title {
          margin: 10px 0;
          position: relative;
          font-size: 16px;
          color: $black;
          letter-spacing: 1px;
          font-weight: 500;
          text-transform: uppercase;
        }
        .skills-section-content-item-content {
          margin: 0;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 1px;
          color: $grey-2;
          font-weight: 300;
        }
      }
      @media screen and (max-width: 800px) {
        .skills-section-content-item {
          width: 48%;
          max-width: 48%;
        }
      }
      @media screen and (max-width: 550px) {
        flex-direction: column;
        .skills-section-content-item {
          width: 100%;
          max-width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    padding: 40px 0;
  }
}
.dark-mode {
  .container {
    .skills-section-content {
      .skills-section-content-item {
        .skills-section-content-item-logo {
          color: $darkyellow;
        }
        .skills-section-content-item-title {
          color: $darkblack;
        }
        .skills-section-content-item-content {
          color: $darkgrey-2;
        }
      }
    }
  }
}
</style>