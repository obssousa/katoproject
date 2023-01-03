<template>
  <div class="partner">
    <img class="logo" :src="logo" />
    <component :is="smallText ? 'h4' : 'h3'">
      {{ title }}
    </component>
  </div>
</template>

<script setup>

defineProps({
  title: String,
  logo: String,
  smallText: Boolean
})

</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

.partner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: 300px;

  .logo {
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }
}
</style>
