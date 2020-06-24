<template>
  <div class="main-header">
    <div class="main-header__heading">Hello User</div>
    <div class="main-header__updates">Recent Items</div>
  </div></template
>

<script>
export default {
  name: "MainHeader"
};
</script>

<style scoped lang="scss">
//noinspection CssInvalidAtRule
.main-header {
  height: 220px;
  /*  FIXME: NO_MARGIN_WITHIN_COMPONENT */
  @apply flex justify-between m-5 p-5 text-gray-800 bg-gray-300;
  @screen sm {
    height: 150px;
  }
  &__heading {
    @apply text-3xl text-gray-800;
    @screen md {
      @apply text-4xl;
    }
  }
}
</style>
