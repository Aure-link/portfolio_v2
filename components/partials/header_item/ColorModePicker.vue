<template>
  <div v-if="$colorMode.preference == 'dark'" class="change-color">
    <span
      class="change-color-icon"
      @click="$colorMode.preference = 'light'"
    >
      <ion-icon name="sunny-outline"></ion-icon>
    </span>
  </div>
  <div v-else class="change-color">
    <span
      class="change-color-icon"
      @click="$colorMode.preference = 'dark'"
    >
      <ion-icon name="moon-outline"></ion-icon>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["light", "dark"],
    };
  }
};
</script>

<style lang="scss" scoped>
.change-color {
  display: flex;
  .change-color-icon {
    cursor: pointer;
    border: 2px solid $yellow;
    border-radius: 5px;
    padding: 2px;
    font-size: 18px;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $black;
    transition: 0.2s;
  }
}
.dark-mode {
  .change-color {
    .change-color-icon {
      border-color: $darkyellow;
      color: $darkblack;
    }
  }
}
</style>