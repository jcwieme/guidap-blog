<template>
  <button
    class="button"
    :class="[
      isClicked ? 'button--blue' : '',
      propsClass,
      color ? 'button--' + color : '',
      disabled ? 'button--disabled' : '',
    ]"
    @click="[action(), propsClass === 'button__login' ? clicked() : '']"
  >
    <span v-if="propsClass === 'button__login'">
      <span v-if="!isClicked">{{ text }}</span>
      <Loader v-if="isClicked" propsClass="spinner__path--white" />
    </span>
    <span v-else-if="propsClass === 'button__add'">
      <AddLogo />
    </span>
    <span v-else>{{ text }}</span>
  </button>
</template>

<script>
import Loader from "@/components/basics/Loader";
import AddLogo from "@/components/basics/AddLogo";

export default {
  name: "Button",
  components: {
    Loader,
    AddLogo,
  },
  data() {
    return {
      isClicked: false,
    };
  },
  props: {
    text: {
      type: String,
      default: "Button",
    },
    propsClass: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
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
      this.isClicked = true;
    },
  },
  computed: {
    err: function() {
      return this.$store.state.err;
    },
  },
  watch: {
    err: function(value) {
      if (value !== null) {
        this.isClicked = false;
      }
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

  &__nav {
    width: 30%;
    font-size: 12px;
    padding: 10px 20px;
  }

  &--disabled {
    color: lighten($color: #2c3e50, $amount: 30);
    border-color: lighten($color: #2c3e50, $amount: 30);
    cursor: unset;

    &:hover {
      color: lighten($color: #2c3e50, $amount: 30);
      border-color: lighten($color: #2c3e50, $amount: 30);
      background-color: transparent;
    }
  }

  @media screen and (max-width: 1024px) {
    &__add {
      width: auto;
      height: auto;

      padding: 5px 15px;

      border-radius: 20px;
    }
  }
}
</style>
