<template>
  <div class="main-overview">
    <div class="overviewcard">
      <div class="overviewcard__icon">Overview</div>
      <div class="overviewcard__info">Card</div>
    </div>
    <div class="overviewcard">
      <div class="overviewcard__icon">Overview</div>
      <div class="overviewcard__info">Card</div>
    </div>
    <div class="overviewcard">
      <div class="overviewcard__icon">Overview</div>
      <div class="overviewcard__info">Card</div>
    </div>
    <div class="overviewcard">
      <div class="overviewcard__icon">Overview</div>
      <div class="overviewcard__info">Card</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainOverview"
};
</script>

<style scoped lang="scss">
//noinspection CssInvalidAtRule
.main-overview {
  /*  FIXME: NO_MARGIN_WITHIN_COMPONENT */
  @apply grid gap-5 m-5 transition duration-500;
  /* where the magic happens !!*/
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  /*  specifying the row height => card-height*/
  grid-auto-rows: 120px;
  .overviewcard {
    @apply flex items-center justify-between p-5 bg-gray-300;
  }
}
</style>
