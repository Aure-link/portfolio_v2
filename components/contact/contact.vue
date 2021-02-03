<template>
  <div class="contact-section section-grey">
    <div class="container">
      <div class="contact-section-title section-title">Contact me</div>
      <div class="contact-section-form">
        <form name="contact" action="" method="post" netlify>
            <input type="hidden" name="form-name" value="contact" />
          <label class="form-label" for="name"> Name: </label>
          <input class="form-field" name="name" id="name" />
          <label class="form-label" for="email"> Email: </label>
          <input class="form-field" name="email" id="email" />
          <label class="form-label" for="message"> Message: </label>
          <textarea class="form-field" name="message" id="message"></textarea>
          <input class="form-button" type="submit" value="Send message" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>