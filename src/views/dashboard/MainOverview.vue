<template>
  <el-row :gutter="20">
    <el-col :span="6" class="overviewcard">
      <div class="overviewcard__icon">Overview</div>
      <div class="overviewcard__info">Card</div>
    </el-col>
    <el-col :span="6" class="overviewcard">
      <div class="overviewcard__icon">Overview</div>
      <div class="overviewcard__info">Card</div>
    </el-col>
    <el-col :span="6" class="overviewcard">
      <div class="overviewcard__icon">Overview</div>
      <div class="overviewcard__info">Card</div>
    </el-col>
    <el-col :span="6" class="overviewcard">
      <div class="overviewcard__icon">Overview</div>
      <div class="overviewcard__info">Card</div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "MainOverview"
};
</script>

<style scoped lang="scss">
//noinspection CssInvalidAtRule
.el-row {
}
</style>
