<template>
  <div class="skills-section">
    <div class="container">
      <div class="skills-section-title">What I Do</div>
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
import { skills } from "../../content/skills.js";
export default {
  data() {
    return {
      skills,
    };
  },
};
</script>

<style lang="scss">
.skills-section {
  background-color: #f9f9f9;
  .container {
    padding: 120px 0;
    .skills-section-title {
      font-family: "Lobster";
      font-size: 30px;
      margin-bottom: 30px;
    }
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
          color: #fdd912;
        }
        .skills-section-content-item-title {
          margin: 10px 0;
          position: relative;
          font-size: 13px;
          color: #292929;
          letter-spacing: 1px;
          font-weight: 500;
          text-transform: uppercase;
        }
        .skills-section-content-item-content {
          margin: 0;
          font-size: 13px;
          line-height: 22px;
          color: #999999;
        }
      }
    }
  }
}
</style>