<template>
  <el-tag
    closable
    size="small"
    :color="backgroundColor"
    :style="{ color: accentColor }"
  >
    <span class="inline-block">{{ text }}</span>
  </el-tag>
</template>

<script>
import {
  complement,
  readableColor,
  shade,
  lighten,
  getLuminance,
} from 'polished'

export default {
  name: 'CustomTag',
  props: ['text', 'color'],
  computed: {
    backgroundColor() {
      this.$emit('UPDATE_BACKGROUND_COLOR', {
        luminance: getLuminance(this.color),
      })
      return lighten(0.25, this.color)
    },
    accentColor() {
      // TODO: return a readable color based on the color prop
      return readableColor(this.backgroundColor)
    },
  },
}
</script>

<!--  TODO: should override  -->
<style scoped>
.el-tag .el-tag__close:hover {
  color: #fff;
  background-color: #409eff;
}
</style>
