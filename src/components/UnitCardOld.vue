<template>
    <el-card :body-style="{ padding: '0px' }" class="cardParent" shadow="hover">
      <img class="image" :src="img" />
      <div class="bottomContent">
        <img class="logo" :src="logo" />
        <div class="bottom">
          <component class="title" :is="isMobile ? 'h4' : 'h3'">{{ title }}</component>
          <component class="address" :is="isMobile ? 'h5' : 'h5'">{{ address }}</component>
        </div>
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
@import '../assets/variables.scss';

.cardParent {
  border-radius: 20px;
  width: 360px;
  background-image: linear-gradient(to top, $secondaryColor, $secondaryLightColor);
  // opacity: 0.8;
  transition: all 0.3s ease-out;

  .bottomContent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: $space2x $space2x $space $space2x;

    .logo {
      height: 64px;
      width: 64px;
      // border-radius: 50%;
      object-fit: cover;
    }

    .bottom {
      margin: $space $space2x;
      color: black;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      .title {
        margin: 0px;
      }

      .address {
        margin: $space 0 0;
      }

      .about {
        margin: $space2x 0 0;
      }
    }
  }

  .image {
    width: 100%;
    height: 300px;
    display: block;
    mask-image: linear-gradient(to top, transparent 5%, $secondaryDarkColor 70%, black 100%);
    -webkit-mask-image: linear-gradient(to top, transparent 5%, $secondaryDarkColor 70%, black 100%);
    object-fit: cover;
  }

  &:hover {
    opacity: 1;
    transform: translateY(-3%);
    background-position: 360px 300px;
    background-image: linear-gradient(to bottom, $secondaryColor, $secondaryDarkColor);

    .image {
      mask-image: linear-gradient(to top, transparent 1%, $secondaryLightColor 25%, black 100%);
      -webkit-mask-image: linear-gradient(to top, transparent 1%, $secondaryLightColor 25%, black 100%);
    }
  }
}
</style>
