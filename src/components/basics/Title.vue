<template>
  <tag :is="type">{{ text }}</tag>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'h1',
    },
  },
}
</script>

<style lang="scss"></style>
