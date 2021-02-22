<template>
  <div class="about-section content-section">
    <div class="container">
      <div class="about-picture">
        <img src="~/assets/img/personal.jpg" />
      </div>
      <div class="about-content">
        <h1 class="about-content-title">
          {{ $t('about.title') }}
        </h1>
        <div class="about-content-description">
          {{ $t('about.text') }}
        </div>
        <a class="about-content-resume" href="/cv.pdf" target="_blank">{{ $t('about.link') }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-section {
  padding: 120px 0;
  @media screen and (max-width: 800px) {
    padding: 40px 0;
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
        color: $black;
      }
      .about-content-description {
        margin: 25px 0;
        padding: 0;
        font-size: 16px;
        color: $grey-2;
        line-height: 28px;
      }
      .about-content-resume {
        font-size: 15px;
        color: $black;
        letter-spacing: 1px;
        line-height: 12px;
        text-transform: uppercase;
        cursor: pointer;
        position: relative;
        transition: 0.3s;
        z-index: 1;
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: $yellow;
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
    @media screen and (max-width: 800px) {
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
.dark-mode {
  .about-section {
    .container {
      .about-content {
        .about-content-title {
          color: $darkblack;
        }
        .about-content-description {
          color: $darkblack;
        }
        .about-content-resume {
          color: $darkblack;
          &::before {
            background-color: $darkyellow;
          }
        }
      }
    }
  }
}
</style>