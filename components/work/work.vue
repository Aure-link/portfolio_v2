<template>
  <div class="works-section content-section">
    <div v-on:click="closePopin" v-if="selectedWork" class="popin">
      <div class="popin-content">
        <div v-on:click="closePopin" class="close-popin">
          <ion-icon class="close-icon" name="close"></ion-icon>
        </div>
        <img
          class="popin-img"
          :src="require(`~/assets/img/works/${selectedWork.img}.png`)"
        /> 
        <div class="popin-desc">
          <div class="popin-tag">
            {{selectedWork.tag}}
          </div>
          <div class="popin-title">
            {{ selectedWork.title }}
          </div>
          <p class="popin-paragraph">
            {{ selectedWork.resume }}
          </p>
          <a v-if="selectedWork.link" v-bind:href="selectedWork.link" class="popin-link" target="_blank">view project</a>
          <span v-else v-bind:href="selectedWork.link" class="popin-link" target="_blank">no project yet</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="work-section-title section-title">Recent Works</div>
      <div class="work-section-items">
        <div
          v-for="work in works"
          v-bind:key="work.id"
          v-on:click="popIn(work)"
          class="work-section-items-item"
        >
          <img
            class="work-section-items-item-img"
            :src="require(`~/assets/img/works/${work.img}.png`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { works } from "../../content/works.js";
export default {
  data() {
    return {
      works,
      visible: false,
      selectedWork: undefined,
      static: undefined
    };
  },
  methods: {
    popIn(work) {
      this.selectedWork = work;
    },
    closePopin() {
      this.selectedWork = undefined;
    },
  }
};
</script>

<style lang="scss" scoped>
.works-section {
  position: relative;
    padding: 120px 0;
    @media screen and (max-width: 750px) {
      padding: 40px 0;
    }
  .container {
    .work-section-items {
      display: flex;
      justify-content: space-between;
      .work-section-items-item {
        max-height: 280px;
        width: 30%;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
          margin-top: -15px;
          margin-bottom: 15px;
          box-shadow: 0 10px 45px rgba(0, 0, 0, 0.15);
        }
        .work-section-items-item-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
      }
      @media screen and (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        .work-section-items-item {
          width: 100%;
          height: 280px;
          margin: 10px 0;
          border: 1px solid #292929;
          &:hover {
            margin: 10px 0;
            overflow: hidden;
            box-shadow: initial;
          }
        }
      }
    }
  }
  .popin {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    .popin-content {
      background-color: #fff;
      width: 620px;
      margin: 30px auto;
      position: relative;
      box-shadow: 0 25px 50px rgb(0 0 0 / 5%);
      padding: 10px;
      z-index: 3;
      border-radius: 10px;
      .close-popin {
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 50px;
        background-color: #fff;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .close-icon {
          font-size: 30px;
          color: #333;
        }
      }
      .popin-img {
        width: 100%;
        height: 450px;
        object-fit: cover;
        object-position: top;
      }
      .popin-desc {
        padding: 30px 20px;
        .popin-tag {
          margin: 20px 0 10px 0;
          font-size: 13px;
          color: #898989;
          line-height: 12px;
          display: inline-block;
          box-shadow: inset 0 -6px 0 #fdd912;
        }
        .popin-title {
          margin: 0 0 15px 0;
          color: #292929;
          font-size: 26px;
          line-height: 1.4;
        }
        .popin-paragraph {
          padding: 0;
          font-size: 15px;
          color: #999999;
          line-height: 28px;
          font-weight: 300;
          margin-bottom: 30px;
        }
        .popin-link {
          padding: 2px 0 0 0;
          font-size: 12px;
          color: #292929;
          letter-spacing: 1px;
          font-weight: 500;
          line-height: 12px;
          position: relative;
          transition: 0.3s;
          box-shadow: inset 0 -6px 0 #fdd912;  
          text-transform: uppercase;
          &:hover {
            color: #292929;
            box-shadow: inset 0 -14px 0 #fdd912;  
          }
        }
      }
    }
    @media screen and (max-width: 500px) {
      height: 98vh;
      max-height: 98vh; 
      top: 50%;
      transform: translate(0, -50%);
      .popin-content {
        height: 100%;
        width: 100%;
        overflow: scroll; 
      }
    }
  }
}
</style>