<template>
    <el-row class="row" justify="center">
        <h2 class="title"> Descubra e visite nossas unidades </h2>
        <h4 class="subtitle"> Aproveite a unidade mais próxima de você para seguir o caminho do Shotokan. </h4>
        <div class="content">
            <UnitCard
                v-for="(unit, index) in units"
                :key="index"
                :title="unit.title"
                :unit="unit.unit"
                :img="unit.img"
                :whatsapp="unit.whatsapp"
                :number="unit.number"
                :instagram="unit.instagram"
                :instagram-nick="unit.instagramNick"
                :logo="unit.logo"
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
@import '../../assets/variables.scss';

.row {
    padding: 40px $space3x;
    background-image: linear-gradient(to left, var(--el-color-white), var(--el-fill-color-darker));
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        margin: 10px;
    }

    .subtitle {
        max-width: 900px;
        font-size: 18px;
    }

   .content {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        gap: 16px;
    }
}

@media (max-width: 550px) {
    .row {
        padding: 30px $spaceMinimal;
        .content {
            width: -webkit-fill-available;
            flex-direction: column;
        }
    }
}
</style>
