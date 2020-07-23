<template>
  <input
    :type="type"
    :name="name"
    :id="id"
    :placeholder="placeholder"
    class="input"
    :class="propsClass"
    v-model="input"
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "name",
    },
    id: {
      type: String,
      default: "id",
    },
    placeholder: {
      type: String,
      default: "Text",
    },
    propsClass: {
      type: String,
      default: "",
    },
  },
  data: function() {
    return {
      input: "",
    };
  },
  watch: {
    input: function(value) {
      this.$store.commit("TYPE_INPUT", { name: this.name, input: value });
      this.$store.commit("SET_ERROR", null);
    },
  },
};
</script>

<style lang="scss">
.input {
  max-width: 350px;
  width: 80%;
  border: none;
  outline: none;

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
      color: lighten($color: #2c3e50, $amount: 25);
    }

    &:last-of-type {
      margin-bottom: 40px;
    }
  }
}
</style>
