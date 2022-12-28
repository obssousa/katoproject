<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="common-layout">
    <el-container class="content">
      <NavBar />
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}
</style>
