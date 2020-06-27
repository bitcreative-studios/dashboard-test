<template>
  <el-button type="primary" @click="onClick">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: "my-button",

  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>
