<template>
        <el-card class="cardParent" :style="imageGradientStyle" :body-style="{ padding: '0px' }">
          <div class="bottom">
            <h2 class="name">{{ name }}</h2>
            <h4>{{ graduation }}</h4>
            <span> {{ about }} </span>
          </div>
        </el-card>
  </template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  img: String,
  graduation: String,
  about: String
})

const imageGradientStyle = computed(() => {
  return {
    backgroundImage: `linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(230,232,235,0.41) 50%, rgba(255,255,255,0) 100%), url('${props.img}')`,
    backgroundSize: 'cover',
    color: 'white',
    height: '-webkit-fill-available',
    width: '-webkit-fill-available'
  }
})

</script>

<style lang="scss" scoped>

  .cardParent {
    .bottom {
      position: absolute;
      bottom: 0;
      margin: 20px;
      color: var(--el-color-black);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;

      .name {
        color: var(--el-color-primary);
      }
    }
  }

  </style>
