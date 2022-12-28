<template>
    <el-row class="row" justify="center">
        <h1 class="title"> Conheça o Dojo Kato </h1>
        <img class="image" src="@/assets/kato.png" />
    </el-row>
</template>

<script setup>
import UnitCard from '@/components/UnitCard.vue'
import { units } from '@/constants/units'
</script>

<style lang="scss" scoped>
.row{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    height: 360px;
    padding: 20px 0px;
    color: var(--el-color-white);

    .title {
        // text-shadow: 2px 2px 2px black;
    }

   .image {
    max-width: 300px;
   }
}
</style>
