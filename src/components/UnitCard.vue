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

<style lang="scss">

.cardParent {
    width: 360px;
}
  .time {
    font-size: 12px;
    color: #999;
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
