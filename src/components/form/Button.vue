<template>
  <button class="button" :class="propsClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'Button',
    },
    propsClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.button {
  width: 80%;
  max-width: 350px;
  padding: 20px 10px;
  font-size: inherit;
  border-radius: 35px;
  outline: none;

  border: none;
  background-color: transparent;
  border: 3px solid #2c3e50;
  font-weight: bold;
  color: #2c3e50;

  transition: all 250ms ease-in;

  cursor: pointer;

  &__login {
    &:hover {
      background-color: #2c3e50;
      color: #fff;
    }
  }
}
</style>
