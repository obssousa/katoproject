<template>
    <el-row class="row" justify="center">
        <h2 class="title"> Conheça os senseis do Dojo Kato </h2>
        <h4 class="subtitle"> O Dojo Kato conta com uma equipe dedicada por trás do ensino. </h4>
        <el-carousel arrow="never" loop class="card" :interval="5000" :height="isMobile? '200px' : '300px'">
            <el-carousel-item v-for="(sensei, index) in senseis" :key="index">
                <SenseiCard
                    :name="sensei.name"
                    :img="sensei.img"
                    :graduation="sensei.graduation"
                    :about="sensei.about"
                />
            </el-carousel-item>
        </el-carousel>
    </el-row>
</template>

<script setup>
import useDevice from '@/hooks/useDevice'
import { senseis } from '@/constants/senseis'
import SenseiCard from '@/components//SenseiCard.vue'

const { isMobile } = useDevice()

</script>

<style lang="scss" scoped>
@import '../../assets/variables.scss';

.row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 40px $space3x;
    background-image: linear-gradient(to left, var(--el-color-primary), var(--el-color-primary-light-3));
    color: var(--el-color-white);
    flex-wrap: nowrap;

    .title {
        margin: 10px;
    }

    .subtitle {
        max-width: 900px;
        font-size: 18px;
    }

   .card {
        width: 100%;
        max-width: 600px;
    }

    .el-carousel__item {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}

@media (max-width: 550px)
{
    .row {
        padding: 30px $space;
        .card {
            padding: 0px;
            .el-carousel__container {
                margin: 16px;
            }
        }
    }

}
</style>
