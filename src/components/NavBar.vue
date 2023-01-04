<template>
    <el-menu
        v-if="!isMobile"
        :default-active="activeIndex"
        class="header"
        mode="horizontal"
        :ellipsis="false"
        @select="navigateToHash"
    >
        <img @click="navigateToHash(0)" class="logo" src="@/assets/kato.png" />
        <div class="divider"></div>
        <el-menu-item index="1">Ensino</el-menu-item>
        <el-menu-item index="2">Unidades</el-menu-item>
        <el-menu-item index="3">Federação</el-menu-item>
        <el-menu-item index="4">Parceiros</el-menu-item>
    </el-menu>
    <el-menu
        v-if="isMobile"
        :default-active="activeIndex"
        class="header"
        mode="horizontal"
        :ellipsis="false"
    >
        <img @click="navigateToHash(0)" class="logo" src="@/assets/kato.png" />
        <div class="divider"></div>
        <el-button
            icon="Menu"
            size="large"
            class="menu"
            circle
            @click="drawer = true"
        />
    </el-menu>
    <el-drawer v-model="drawer" direction="btt" :with-header="false">
        <div class="drawer">
            <el-button class="button" @click="navigateToHash(1)" link type="primary">Ensino</el-button>
            <el-button class="button" @click="navigateToHash(2)" link type="primary">Unidades</el-button>
            <el-button class="button" @click="navigateToHash(3)" link type="primary">Federação</el-button>
            <el-button class="button" @click="navigateToHash(4)" link type="primary">Parceiros</el-button>
        </div>
    </el-drawer>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import useDevice from '@/hooks/useDevice'

const drawer = ref(false)
const router = useRouter()
const activeIndex = ref('0')
const navItem = reactive([
  'about', 'learn', 'units', 'federation', 'partners'
])

function navigateToHash (index) {
  console.log(index)
  activeIndex.value = index
  router.push({ path: '/', hash: `#${navItem[index]}` })

  if (isMobile.value) {
    drawer.value = false
  }
}

const { isMobile } = useDevice()

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

    .menu {
        margin-right: 16px;
        margin-top: 12px;
        border: none;
    }
}

.drawer {
    display: flex;
    flex-direction: column;

    .button {
        height: 35px;
        margin: 0;
    }
}

</style>
