<template>
    <el-card :body-style="{ padding: '0px' }" class="cardParent" shadow="hover">
      <img class="image" :src="img" />
      <div class="bottom">
        <component class="title" :is="isMobile ? 'h4' : 'h2'">{{ title }}</component>
        <component class="address" :is="isMobile ? 'h5' : 'h4'">{{ address }}</component>
        <!-- <span class="about"> {{ about }} </span> -->
      </div>
    </el-card>
  </template>

<script lang="ts" setup>
import useDevice from '@/hooks/useDevice'

const { isMobile } = useDevice()

defineProps({
  title: String,
  img: String,
  logo: String,
  address: String,
  postalCode: String,
  mapLink: String
})

</script>

<style lang="scss" scoped>

.cardParent {
    border-radius: 20px;
    width: 360px;
    background-image: linear-gradient(to left, var(--el-color-primary), #ff604d);
    color: var(--el-color-white);
}

  .bottom {
    margin: 12px 20px;
    color: var(--el-color-white);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    .title {
      margin: 0px;
    }

    .address {
      margin: 8px 0 0;
    }

    .about {
      margin: 16px 0 0;
    }
  }

  .image {
    width: 100%;
    height: 300px;
    display: block;
    object-fit: cover;
  }
  </style>
