<template>
    <el-row class="row" justify="center">
        <h1 class="title"> Visite uma unidade </h1>
        <div class="content">
            <UnitCard
                v-for="(unit, index) in units"
                :key="index"
                :title="unit.title"
                :img="unit.img"
                :address="unit.address"
                :postalCode="unit.postalCode"
                :mapLink="unit.mapLink"
            />
        </div>
    </el-row>
</template>

<script setup>
import UnitCard from '@/components/UnitCard.vue'
import { units } from '@/constants/units'
</script>

<style lang="scss" scoped>
.row {
    padding: 20px 0;
    background-image: linear-gradient(to left, var(--el-color-white), var(--el-fill-color-darker));
    display: flex;
    flex-direction: column;
    align-items: center;

   .content {
        display: flex;
        flex-direction: row;
        gap: 8px;
    }
}
</style>
