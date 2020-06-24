<template>
  <div class="grid-container">
    <header class="header">
      <div class="header__search">search...</div>
      <div class="header__avatar">
        <el-button>Your face</el-button>
      </div>
    </header>
    <aside class="sidenav">
      <ul class="sidenav__list">
        <li class="sidenav__list-item">Item 1</li>
        <li class="sidenav__list-item">Item 2</li>
        <li class="sidenav__list-item">Item 3</li>
        <li class="sidenav__list-item">Item 4</li>
        <li class="sidenav__list-item">Item 5</li>
      </ul>
    </aside>
    <main class="main">
      <main-header />
      <main-overview />
      <main-content />
    </main>
    <footer class="footer">
      <div class="footer__copyright">&copy; 2020 MIT</div>
      <div class="footer__signature">Made with love by pure thievery</div>
    </footer>
  </div>
</template>

<script>
import MainHeader from "@/views/dashboard/MainHeader";
import MainOverview from "@/views/dashboard/MainOverview";
import MainContent from "@/views/dashboard/MainContent";
export default {
  name: "Layout",
  components: { MainContent, MainOverview, MainHeader }
};
</script>

<style>
body > * {
  @apply text-gray-800 transition-all duration-300 ease-in-out;
}
</style>
<style scoped lang="scss">
//noinspection CssInvalidAtRule
.grid-container {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "sidenav header"
    "sidenav main"
    "sidenav footer";
  height: 100vh;

  .header {
    grid-area: header;
  }
  .footer {
    grid-area: footer;
  }
  .header,
  .footer {
    @apply flex items-center justify-between py-0 px-4 bg-gray-400;
  }

  .sidenav {
    grid-area: sidenav;
    @apply flex bg-gray-800 flex-col;
    &__list {
      /*  FIXME: NO_MARGIN_WITHIN_COMPONENT */
      margin-top: 85px;
      &-item {
        @apply py-5 pr-5 pl-6 text-white;
        &:hover {
          @apply bg-gray-700 cursor-pointer;
          transition: 0.5s ease-in-out;
        }
      }
    }
  }
  .main {
    grid-area: main;
    background: #f7fafc;
  }
}
</style>
