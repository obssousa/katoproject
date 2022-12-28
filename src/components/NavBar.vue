<script setup>
</script>

<template>
    <el-menu
        :default-active="activeIndex"
        class="header"
        mode="horizontal"
        :ellipsis="false"
        @select="navigateToHash"
    >
        <img @click="navigateToHash(0)" class="logo" src="@/assets/kato.png" />
        <div class="divider"></div>
        <el-menu-item index="0">Unidades</el-menu-item>
        <el-menu-item index="1">Ensino</el-menu-item>
        <el-menu-item index="2">Contato</el-menu-item>
        <el-menu-item index="3">Federação</el-menu-item>
        <el-menu-item index="4">Parceiros</el-menu-item>
    </el-menu>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeIndex = ref('0')
const navItem = reactive([
  'about', 'learn', 'units', 'federation', 'partners'
])

function navigateToHash (index) {
  activeIndex.value = index
  router.push({ path: '/', hash: `#${navItem[index]}` })
}

</script>

<style lang="scss" scoped>

.header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: fixed;
    z-index: 99999;
    top: 0;
    width: 100%;

    .logo {
        margin: 4px 8px;
        height: 50px;
        cursor: pointer;
    }

    .divider {
        max-width: 1080px;
        flex-grow: 1;
    }
}

</style>
