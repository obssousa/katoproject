<template>
    <div class="cardParent">
      <img class="image" :src="img" />
      <div class="bottom">
        <component class="name" :is="isMobile ? 'h3' : 'h2'">{{ name }}</component>
        <h4 class="graduation"> {{ graduation }}</h4>
        <span class="about"> {{ about }} </span>
      </div>
    </div>
  </template>

<script setup>
import useDevice from '@/hooks/useDevice'

defineProps({
  name: String,
  img: String,
  graduation: String,
  about: String
})

const { isMobile } = useDevice()

</script>

<style lang="scss" scoped>

  .cardParent {
    display: flex;
    flex-direction: row;
    width: 100%;

    .image {
      height: 200px;
      width: 200px;
      border-radius: 50%;
      object-fit: cover;
    }

    .bottom {
      margin: 0 20px;
      color: var(--el-color-white);
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      .name {
        margin: 0px;
      }

      .graduation {
        margin: 8px 0 0;
      }

      .about {
        margin: 16px 0 0;
      }
    }
  }

  @media (max-width: 550px)  {
    .cardParent {
        align-items: center;

        .image {
          height: 120px;
          width: 120px;
        }

        .bottom {
          margin: 0 4px;
          .name, .graduation, .about {
            margin: 2px;
          }
        }
    }
  }

  </style>
