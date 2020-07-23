<template>
  <img :src="src" :alt="alt" />
</template>

<script>
export default {
  name: 'ImageCpt',
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    propsClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
