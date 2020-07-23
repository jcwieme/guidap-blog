<template>
  <button class="button" :class="propsClass" @click="[action(), clicked()]">
    <span v-if="propsClass === 'button__login'">
      <span v-if="!isClicked">{{ text }}</span>
      <svg
        class="spinner"
        width="25px"
        height="25px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
        v-if="isClicked"
      >
        <circle
          class="path"
          fill="none"
          stroke-width="6"
          stroke-linecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </span>
    <span v-else>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  computed: {
    isClicked: function() {
      return this.$store.state.isClicked;
    },
  },
  props: {
    text: {
      type: String,
      default: "Button",
    },
    propsClass: {
      type: String,
      default: "",
    },
    action: {
      type: Function,
      default: () => {
        return;
      },
    },
  },
  methods: {
    clicked() {
      this.$store.commit("SET_CLICK", true);
    },
  },
};
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
    padding: 15px 10px;
    span {
      height: 25px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      background-color: #2c3e50;
      color: #fff;
    }
  }
}

$offset: 187;
$duration: 1.4s;

.spinner {
  animation: rotator $duration linear infinite;
}

@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

.path {
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash $duration ease-in-out infinite,
    colors ($duration * 4) ease-in-out infinite;
}

@keyframes colors {
  0% {
    stroke: #4285f4;
  }
  25% {
    stroke: #de3e35;
  }
  50% {
    stroke: #f7c223;
  }
  75% {
    stroke: #1b9a59;
  }
  100% {
    stroke: #4285f4;
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
