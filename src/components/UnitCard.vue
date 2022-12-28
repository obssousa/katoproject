<template>
        <el-card class="cardParent" shadow="hover">
          <img
            :src="img"
            class="image"
          />
          <div>
            <span>{{ title }}</span>
            <div class="bottom">
              <time class="time">{{ currentDate }}</time>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
  </template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  title: String,
  img: String,
  address: String,
  postalCode: String,
  mapLink: String
})

const currentDate = ref(new Date())
</script>

<style lang="scss" scoped>

.cardParent {
    width: 360px;
    background-image: linear-gradient(to left, var(--el-color-primary-light-5), var(--el-color-primary-light-7));
    color: var(--color-black);
}
  .time {
    font-size: 12px;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    padding: 0;
    min-height: auto;
  }

  .image {
    width: 100%;
    display: block;
  }
  </style>
