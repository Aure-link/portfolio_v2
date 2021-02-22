<template>
  <div class="section-footer section-grey">
    <div class="copyright">
      &copy; {{ new Date().getFullYear() }} Aurélien. {{ $t("footer.copyright") }}
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
    color: $grey-2;
    @media screen and (max-width: 800px) {
      padding: 40px 0;
    }
  }
}

.dark-mode {
  .section-footer {
    .copyright {
      color: $darkgrey-2;
    }
  }
}
</style>