<template>
  <svg
    class="spinner"
    width="25px"
    height="25px"
    viewBox="0 0 66 66"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      class="spinner__path"
      :class="propsClass"
      fill="none"
      stroke-width="6"
      stroke-linecap="round"
      cx="33"
      cy="33"
      r="30"
    ></circle>
  </svg>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    propsClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
$offset: 187;
$duration: 1.4s;

.spinner {
  animation: rotator $duration linear infinite;
  &__path {
    stroke-dasharray: $offset;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash $duration ease-in-out infinite;

    &--white {
      stroke: #fff;
    }

    &--blue {
      stroke: #2c3e50;
    }

    &--yellow {
      stroke: #fbbe03;
    }
  }
}

@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: $offset;
  }
  50% {
    stroke-dashoffset: $offset/4;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: $offset;
    transform: rotate(450deg);
  }
}
</style>
