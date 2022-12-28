<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },
  label: String,
  icon: String
})

defineEmits(['click'])

</script>

<template>
    <el-button>Default</el-button>
</template>

<style scoped lang="scss">
  .button {
    background-color: var(--red-500);

    &:hover {
      background: var(--red-400) !important;
    }
  }
</style>
