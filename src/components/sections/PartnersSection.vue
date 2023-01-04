<template>
    <el-row class="row" justify="center">
        <h2 class="title"> Parceiros do Dojo Kato </h2>
        <div class="content">
            <PartnerCard
                v-for="(partner, index) in partners"
                :key="index"
                :title="partner.title"
                :logo="partner.logo"
            />
        </div>
    </el-row>
</template>

<script setup>
import { partners } from '@/constants/partners'
import PartnerCard from '@/components/PartnerCard.vue'

</script>

<style lang="scss" scoped>
@import '../../assets/variables.scss';

.row {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px $space3x 40px;
    background-image: linear-gradient(to left, #212121, #424242);
    color: var(--el-color-white);

    .content {
        display: flex;
        justify-content: center;
        margin-top: $space2x;
        gap: 64px;
    }
}

@media (max-width: 550px) {
    .row {
        padding: 30px $space;
        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 32px;
        }
    }
}
</style>
