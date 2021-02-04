<template>
  <div class="about-section content-section">
    <div class="container">
      <div class="about-picture">
        <img src="~/assets/img/personal.jpg" />
      </div>
      <div class="about-content">
        <h1 class="about-content-title">
          I'm Aurélien Guilliet, front-end Developer and UX Designer from
          France.
        </h1>
        <div class="about-content-description">
          I have good experience in web site building and customisation. I'm
          also good at html, css, jQuery, Javascript. I'm used to work with
          front-end framework like Vue.js, with php framework like Symfony and also
          API. I love to find the best approach to develop website developement. <br />
          Feel free to contact me writing an email with your project idea.
        </div>
        <a class="about-content-resume" href="">download resume</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-section {
  padding-top: 120px;
  margin: 0 0 120px 0;
  @media screen and (max-width: 750px) {
    padding-top: 40px;
    margin-bottom: 40px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    .about-picture {
      width: 35%;
      max-height: 450px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .about-content {
      width: 60%;
      .about-content-title {
        font-family: 'Lobster';
        margin: 25px 0;
        font-size: 45px;
        line-height: 55px;
        color: #292929;
      }
      .about-content-description {
        margin: 25px 0;
        padding: 0;
        font-size: 16px;
        color: #999999;
        line-height: 28px;
      }
      .about-content-resume {
        font-size: 15px;
        color: #292929;
        letter-spacing: 1px;
        line-height: 12px;
        text-transform: uppercase;
        cursor: pointer;
        position: relative;
        transition: 0.3s;
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: #fdd914;
          height: 50%;
          width: 100%;
          z-index: -1;
          transition: 0.3s;
        }
        &:hover {
          &::before {
            height: 100%;
          }
        }
      }
    }
    @media screen and (max-width: 750px) {
      flex-direction: column;
      .about-picture {
        width: 100%;
        max-height: 100%;
      }
      .about-content {
        width: 100%;
        .about-content-title {
          font-size: 35px;
        }
      }
    }
  }
}
</style>