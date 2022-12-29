<template>
    <el-row class="row" justify="center">
        <h1 class="title"> Conheça os parceiros do Dojo Kato </h1>
        <el-carousel class="card" :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
            <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </el-row>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.row{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    height: 360px;
    padding: 20px 0px;
    background-image: linear-gradient(to left, var(--el-color-primary), var(--el-color-primary-light-3));
    color: var(--el-color-white);

    .title {
        // text-shadow: 2px 2px 2px black;
    }

   .card {
    width: 100%;
    max-width: 1080px;

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
