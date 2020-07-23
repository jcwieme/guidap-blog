<template>
  <button
    class="button"
    :class="[isClicked ? 'button--blue' : '', propsClass, 'button--' + color]"
    @click="[action(), propsClass === 'button__login' ? clicked() : '']"
  >
    <span v-if="propsClass === 'button__login'">
      <span v-if="!isClicked">{{ text }}</span>
      <Loader v-if="isClicked" propsClass="spinner__path--white" />
    </span>
    <span v-else-if="propsClass === 'button__add'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
      >
        <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
      </svg>
    </span>
    <span v-else>{{ text }}</span>
  </button>
</template>

<script>
import Loader from "@/components/basics/Loader";

import types from "@/store/types";

export default {
  name: "Button",
  components: {
    Loader,
  },
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
    color: {
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
      this.$store.commit(types.SET_BOOL, { name: "isClicked", bool: true });
    },
  },
};
</script>

<style lang="scss">
.button {
  width: 80%;
  max-width: 350px;
  padding: 15px 10px;
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

  &:hover {
    background-color: #2c3e50;
    color: #fff;
  }

  &--blue {
    background-color: #2c3e50;
    color: #fff;
  }

  &--red {
    border-color: #fd4c43;
    color: #fd4c43;

    &:hover {
      background-color: #fd4c43;
      color: #fff;
    }
  }

  &__login {
    span {
      height: 25px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  &__add {
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      height: 15px;
      width: 15px;
      display: block;
    }
    &:hover {
      svg {
        fill: #fff;
      }
    }

    svg {
      transition: all 250ms ease-in;
      fill: #2c3e50;
    }
  }
}
</style>
