<template>
    <div class="cardParent" >
      <div class="flipper">
        <el-card class="redContent" shadow="hover">
          <component class="title" :is="isMobile ? 'h3' : 'h2'">{{ unit }}</component>
        </el-card>
        <el-card class="hoverContent" shadow="hover">
          <div class="info">
            <img class="logo" :src="logo" />
            <div class="bottom">
              <component class="title" :is="isMobile ? 'h4' : 'h3'">{{ title }}</component>
              <component @click="redirectAdress(mapLink)" class="address" :is="isMobile ? 'h5' : 'h5'">{{ address }}</component>
            </div>
          </div>
          <div class="contact">
            <a :href="whatsapp" target="_blank">
              <img class="icon" src="https://cdn-icons-png.flaticon.com/512/4494/4494494.png" />
              <span>{{ number }}</span>
            </a>
            <a :href="instagram" target="_blank" v-show="instagramNick.length > 0">
              <img class="icon" src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" />
              <span>{{ instagramNick }}</span>
            </a>
          </div>
        </el-card>
      </div>
    </div>
  </template>

<script setup>
import useDevice from '@/hooks/useDevice'

const { isMobile } = useDevice()

defineProps({
  title: String,
  unit: String,
  img: String,
  logo: String,
  whatsapp: String,
  instagram: String,
  instagramNick: String,
  address: String,
  postalCode: String,
  mapLink: String,
  number: String
})

function redirectAdress (link) {
  window.open(link, '_blank')
}

</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

@font-face {
    font-family: 'Karate';
    src: url('../assets/Karate.ttf');
}

.cardParent {
  border-radius: 20px;
  min-width: 400px;
  height: 150px;
  perspective: 1000px;

  .flipper {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    .redContent, .hoverContent {
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .redContent {
      display: flex;
      justify-content: center;
      position: absolute;
      align-items: center;
      background-image: linear-gradient(to left, var(--el-color-primary), var(--el-color-primary-light-3));
      color: var(--el-color-white);
      font-family: 'Karate', sans-serif;

      .title {
        text-transform: uppercase;
      }
    }

    .hoverContent {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      transform: rotateY(180deg);
      background-image: linear-gradient(to right, #fafafa, #ffffff);

      .info {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;

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
            cursor: pointer;
          }

          .about {
            margin: $space2x 0 0;
          }
        }
      }

      .contact {
        display: flex;
        flex-direction: row;

        a {
          display: flex;
          align-items: center;
          text-decoration: unset;
          color: black;
          margin: $space $space4x $space 0;

          .icon {
            margin-right: $space;
            width: 32px;
            border-radius: 50%;
          }
        }
      }
    }
  }

  &:hover {
    .flipper{
      transform: rotateY(-180deg);
    }
  }
}

@media (max-width: 550px) {
    .cardParent {
      margin: 0 $spaceMinimal;
      min-width: 280px;

      .flipper {
        .hoverContent {
          .contact {
            > a {
              font-size: 12px;
              margin: $space $spaceMinimal;
            }
          }
        }
      }
    }
}
</style>
