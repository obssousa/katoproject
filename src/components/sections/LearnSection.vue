<template>
    <el-row class="row" justify="center">
        <h2 class="title"> Conheça os senseis do projeto Kato </h2>
        <h4 class="subtitle"> O projeto Kato conta com uma equipe dedicada por trás do ensino. </h4>
        <el-carousel class="card" :interval="10000" type="card" height="500px">
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
import { senseis } from '@/constants/senseis'
import SenseiCard from '@/components//SenseiCard.vue'

</script>

<style lang="scss" scoped>
@use '../../assets/variables.scss';

.row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 20px 0px;
    background-image: linear-gradient(to left, var(--el-color-primary), var(--el-color-primary-light-3));
    color: var(--el-color-white);
    flex-wrap: nowrap;

    .title {
        margin: 10px;
    }

    .subtitle {
        max-width: 600px;
        font-size: 18px;
    }

   .card {
    width: 100%;
    max-width: 1080px;
    gap: 100px;

    .el-carousel__item h3 {
        color: #475669;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
        text-align: center;
        }

        .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
        }
    }
}
</style>
