<script setup>
</script>

<template>
    <el-menu
        :default-active="activeIndex"
        class="header"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
        <img class="logo" src="@/assets/kato.png" />
        <div class="divider"></div>
        <el-menu-item index="0">Unidades</el-menu-item>
        <el-menu-item index="1">Ensino</el-menu-item>
        <el-menu-item index="2">Contato</el-menu-item>
        <el-menu-item index="3">Federação</el-menu-item>
    </el-menu>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('0')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>

.header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    .logo {
        margin: 4px 8px;
        height: 50px;
    }

    .divider {
        max-width: 1080px;
        flex-grow: 1;
    }
}

</style>
