<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="common-layout">
    <el-container direction="vertical">
      <NavBar />
      <el-main class="main"><router-view></router-view></el-main>
    </el-container>
     <el-footer class="footer"><a target="_blank" href="https://obssousa.github.io">Desenvolvido por @obssousa</a></el-footer>
  </div>
</template>

<style lang="scss" scoped>

.main {
  padding: 0px;
}

.footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to left, var(--el-color-white), var(--el-fill-color-darker));

  a {
    text-decoration: none;
    color: black;
  }
}

.flex-grow {
    flex-grow: 1;
}
</style>
