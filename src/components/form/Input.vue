<template>
  <input
    :type="type"
    :name="name"
    :id="id"
    :placeholder="placeholder"
    class="input"
    :class="propsClass"
    v-model="inputData"
    :autocomplete="autocomplete"
  />
</template>

<script>
import types from '@/store/types'

export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: 'name',
    },
    id: {
      type: String,
      default: 'id',
    },
    placeholder: {
      type: String,
      default: 'Text',
    },
    propsClass: {
      type: String,
      default: '',
    },
    autocomplete: {
      type: Boolean,
      default: false,
    },
    input: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputData: this.$props.input,
    }
  },
  watch: {
    inputData: function(value) {
      this.$store.commit(types.SET_INPUT, { name: this.name, input: value })

      if (this.name === 'username' || this.name === 'password') {
        this.$store.commit(types.SET_OPTION, { name: 'err', data: null })
      }
    },
  },
}
</script>

<style lang="scss">
.input {
  max-width: 350px;
  width: 80%;
  border: none;
  outline: none;

  &::placeholder {
    color: lighten($color: #2c3e50, $amount: 25);
  }

  &__login {
    border-radius: 35px;

    padding: 20px 10px;
    margin-bottom: 20px;
    text-indent: 40px;

    background-position: 20px 15px;
    background-repeat: no-repeat;
    background-size: auto 20px;

    &--username {
      background-image: url(../../assets/icons/user.svg);
    }

    &--password {
      background-image: url(../../assets/icons/password.svg);
    }

    &::placeholder {
      text-indent: 40px;
    }

    &:last-of-type {
      margin-bottom: 40px;
    }
  }

  &__editTitle {
    padding: 20px 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ececec;
    width: 100%;
  }
}
</style>
