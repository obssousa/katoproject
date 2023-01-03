<template>
    <el-row class="row" justify="center">
        <h2 class="title"> Somos associados a federações </h2>
        <div class="content">
            <PartnerCard
                v-for="(federation, index) in federations"
                :key="index"
                :title="federation.title"
                :logo="federation.logo"
                small-text
            />
        </div>
    </el-row>
</template>

<script setup>
import { federations } from '@/constants/federations'
import PartnerCard from '@/components/PartnerCard.vue'

</script>

<style lang="scss" scoped>
@import '../../assets/variables.scss';

.row {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px $space3x;
    background-image: linear-gradient(to left, var(--el-color-primary), var(--el-color-primary-light-3));
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
