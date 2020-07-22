<template>
  <img :src="src" :alt="alt" :class="propsClass" />
</template>

<script>
export default {
  name: "ImageCpt",
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
    propsClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
