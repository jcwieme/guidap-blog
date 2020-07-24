<template>
  <div :class="propsClass">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    text: {
      type: String,
      default: 'Error',
    },
    propsClass: {
      type: String,
      default: '',
    },
  },
}
</script>
