<template>
  <el-card class="member-card" shadow="hover">
    <div slot="header" class="member-card__header">
      <div class="heading">
        <span class="title">{{ title }}</span>
        <el-button
          circle
          size="mini"
          icon="el-icon-more-outline"
          class="focus:outline-none"
        />
      </div>
      <div class="meta">
        <span
          ><span class="capitalize">{{ board }} </span>|
          <span class="text-blue-400">{{ project }}</span></span
        >
      </div>
    </div>
    <div class="member-card__body">
      <p>
        {{ description }}
      </p>
    </div>
    <div v-if="tags.length" class="member-card__footer space-x-2">
      <custom-tag
        v-for="tag in tags.slice(0, 2)"
        :key="tag"
        :color="tag.color"
        :text="tag.name"
      >
        <span class="inline-block">{{ tag.name }}</span>
      </custom-tag>
      <!--      FIXME: 2 tags is the max that we should display -->
      <el-button v-if="tags.length >= 3" type="text" class="focus:outline-none">
        <i class="el-icon-more-outline"></i>
      </el-button>
    </div>
  </el-card>
</template>

<script>
import { readableColor } from 'polished'
import CustomTag from '@/components/CustomTag/CustomTag'
export default {
  name: 'ProfileCard',
  components: { CustomTag },
  props: {
    tags: {
      type: Array,
      default() {
        return []
      },
    },
    title: String,
    description: String,
    board: String,
    project: String,
  },
}
</script>

<!--suppress CssInvalidAtRule -->
<style lang="scss">
.member-card {
  .el-card__header {
    @apply py-2 border-0;
    .el-button:focus,
    .el-button:hover {
      /*@apply bg-gray-100 border-gray-300;*/
      /*color: #409eff;*/
      /*border-color: #c6e2ff;*/
      /*background-color: #ecf5ff;*/
    }
  }
  .el-tag {
    @apply flex items-center;
  }
}
</style>

<!--suppress CssInvalidAtRule -->
<style scoped lang="scss">
.member-card {
  width: 280px;
  @apply bg-white text-gray-800;
  &__header {
    @apply flex flex-col;
    .heading,
    .meta {
      @apply flex justify-between items-center whitespace-pre;
    }
    .heading {
      @apply text-lg font-medium;
      .title {
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .meta {
      @apply font-ui text-sm text-gray-500;
    }
  }
  &__body {
    @apply mb-4 text-gray-600 leading-relaxed;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &__footer {
    @apply flex items-center pt-2 border-t;
  }
}
</style>
