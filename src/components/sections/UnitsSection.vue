<template>
    <el-row class="row" justify="center">
        <UnitCard
            v-for="(unit, index) in units"
            :key="index"
            :title="unit.title"
            :img="unit.img"
            :address="unit.address"
            :postalCode="unit.postalCode"
            :mapLink="unit.mapLink"
        />
    </el-row>
</template>

<script setup>
import UnitCard from '@/components/UnitCard.vue'
import { units } from '@/constants/units'
</script>

<style lang="scss" scoped>
.row{
   gap: 8px;
   margin: 20px;
}
</style>
