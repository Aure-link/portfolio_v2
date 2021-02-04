<template>
  <div class="section-footer section-grey">
    <div class="copyright">
      &copy; {{ new Date().getFullYear() }} Aurélien. all rights reserved.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  .copyright {
    padding: 120px 0;
    font-size: 15px;
    color: #898989;
    @media screen and (max-width: 750px) {
      padding: 40px 0;
    }
  }
}
</style>