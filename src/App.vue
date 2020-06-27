<template>
  <application-shell>
    <el-container>
      <main-content />
    </el-container>
  </application-shell>
</template>

<script>
// import Layout from "./components/layout/Layout";
import ApplicationShell from "@/components/layout/ApplicationShell";
import MainContent from "@/views/dashboard/MainContent";

export default {
  name: "app",
  components: {
    MainContent,
    ApplicationShell
  }
};
</script>

<style>
@import "assets/styles/tailwind.postcss";
</style>
