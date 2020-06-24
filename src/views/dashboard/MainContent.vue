<template>
  <div class="main-content">
    <div class="card">Card</div>
    <div class="card">Card</div>
    <div class="card">Card</div>
  </div>
</template>

<script>
export default {
  name: "MainContent"
};
</script>

<style scoped lang="scss">
//noinspection CssInvalidAtRule
.main-content {
  /* FIXME: NO_MARGIN_WITHIN_COMPONENT */
  @apply m-5;
  column-count: 2;
  column-gap: 20px;
  .card {
    @apply flex flex-col items-center w-full bg-teal-200 mb-5 p-6;
    -webkit-column-break-inside: avoid;
    /*    FIXME: (only testing) force varying heights to simulate dynamic content */
    &:first-child {
      height: 485px;
    }
    &:nth-child(2) {
      height: 200px;
    }
    &:nth-child(3) {
      height: 265px;
    }
  }
}
</style>
