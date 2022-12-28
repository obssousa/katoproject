<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="common-layout">
    <el-container direction="vertical">
      <NavBar />
      <el-main class="main"><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>

.header {
  width: 100%;

  .logo {
      height: 50px;
  }
}

.main {
  padding: 0px;
}

.flex-grow {
    flex-grow: 1;
}
</style>
