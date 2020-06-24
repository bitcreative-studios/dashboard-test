<template>
  <el-container class="app-shell">
    <el-aside width="100px" class="sider">
      <div class="menu-trigger">
        <svg
          class="sider-icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-labelledby="alignLeftIconTitle"
          stroke-width="1"
          stroke-linecap="square"
          stroke-linejoin="miter"
          fill="none"
        >
          <title id="alignLeftIconTitle">Menu</title>
          <path d="M6 10L14 10M6 6L18 6M6 14L18 14M6 18L14 18" />
        </svg>
      </div>

      <div class="screens">
        <ul class="space-y-8">
          <li class="link">
            <div>
              <svg
                class="sider-icon"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-labelledby="gridLargeIconTitle"
                stroke-width="1"
                stroke-linecap="square"
                stroke-linejoin="miter"
                fill="none"
              >
                <title id="gridLargeIconTitle">Large Grid</title>
                <rect width="7" height="7" x="3" y="3" />
                <rect width="7" height="7" x="14" y="3" />
                <rect width="7" height="7" x="3" y="14" />
                <rect width="7" height="7" x="14" y="14" />
              </svg>
            </div>
          </li>
          <li class="link">
            <div>
              <svg
                class="sider-icon"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-labelledby="dashboardIconTitle"
                stroke-width="1"
                stroke-linecap="square"
                stroke-linejoin="miter"
                fill="none"
              >
                <title id="dashboardIconTitle">Dashboard</title>
                <rect width="20" height="20" x="2" y="2" />
                <path d="M11 7L17 7M11 12L17 12M11 17L17 17" />
                <line x1="7" y1="7" x2="7" y2="7" />
                <line x1="7" y1="12" x2="7" y2="12" />
                <line x1="7" y1="17" x2="7" y2="17" />
              </svg>
            </div>
          </li>
          <li class="link">
            <div>
              <svg
                class="sider-icon"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-labelledby="contactBookIconTitle"
                stroke-width="1"
                stroke-linecap="square"
                stroke-linejoin="miter"
                fill="none"
              >
                <title id="contactBookIconTitle">Contact Book</title>
                <path d="M8,3 L8,21" />
                <path
                  d="M20,2.99999899 L20,21 L6,21 C4.8954305,21 4,20.1045695 4,19 L4,4.99999899 C4,3.89542949 4.8954305,2.99999899 6,2.99999899 L20,2.99999899 Z"
                />
                <path
                  d="M8,17 C8,15 11.3333333,15.3333333 12.6666667,14 C13.3333333,13.3333333 11.3333333,13.3333333 11.3333333,10 C11.3333333,7.778 12.222,6.66666667 14,6.66666667 C15.778,6.66666667 16.6666667,7.778 16.6666667,10 C16.6666667,13.3333333 14.6666667,13.3333333 15.3333333,14 C16.6666667,15.3333333 20,15 20,17"
                />
              </svg>
            </div>
          </li>
          <li class="link">
            <div>
              <svg
                class="sider-icon"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-labelledby="folderIconTitle"
                stroke-width="1"
                stroke-linecap="square"
                stroke-linejoin="miter"
                fill="none"
              >
                <title id="folderIconTitle">Folder</title>
                <path d="M3 5h6l1 2h11v12H3z" />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </el-aside>
    <el-container class="app-container">
      <el-header height="100px">
        <div class="brand">
          <span class="text-3xl font-brand capitalize text-secondary"
            >align</span
          >
        </div>
        <div class="nav"></div>
        <div class="user-controls"></div>
      </el-header>
      <el-container>
        <el-aside width="375px"></el-aside>
        <el-main></el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "ApplicationShell"
};
</script>

<!--suppress CssInvalidAtRule -->
<style scoped lang="scss">
.app-shell {
  @apply h-screen;
  .el-container {
    background: #f9f9f9;
  }
  .sider {
    @apply flex flex-col items-center p-2 bg-white text-gray-300;
    &-icon {
      @apply stroke-current h-full w-12;
    }
    .menu-trigger {
      @apply cursor-pointer mt-4 border-b transition duration-150 w-16 pb-4;
      &:hover {
        @apply text-primary;
      }
    }
    /*  FIXME: this is a terrible name and I think there's hacky code */
    .screens {
      @apply flex flex-col flex-grow mt-8;
      ul {
        @apply flex flex-col;
      }
    }
    .link {
      @apply cursor-pointer;
      &:hover {
        @apply text-gray-400 transition duration-150;
      }
    }
  }
}

.app-container {
  .el-header {
    @apply flex justify-between items-center py-4 px-8 border-b;
  }
  .el-aside {
  }
  .el-main {
    @apply bg-white;
  }
}
</style>
