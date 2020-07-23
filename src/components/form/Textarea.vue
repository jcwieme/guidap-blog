<template>
  <textarea
    :id="id"
    :name="name"
    :rows="row"
    :cols="cols"
    :placeholder="placeholder"
    class="textarea"
    :class="propsClass"
    v-model="inputText"
  ></textarea>
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    id: {
      type: String,
      default: 'textarea',
    },
    name: {
      type: String,
      default: 'textarea',
    },
    row: {
      type: Number,
      default: 50,
    },
    cols: {
      type: Number,
      default: 50,
    },
    placeholder: {
      type: String,
      default: 'Text here...',
    },
    propsClass: {
      type: String,
      default: '',
    },
    input: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputText: this.$props.input,
    }
  },
  watch: {
    inputText: function(value) {
      this.$store.commit('TYPE_INPUT', { name: this.name, input: value })
      this.$store.commit('SET_ERROR', null)
    },
  },
}
</script>

<style lang="scss">
.textarea {
  outline: none;
  resize: none;
  border: none;
  padding: 20px 10px;

  &::placeholder {
    color: lighten($color: #2c3e50, $amount: 25);
    font-family: 'Roboto', sans-serif;
  }
  &--adminEdit {
    margin-bottom: 20px;
    border: 1px solid #ececec;
    width: 100%;
    max-width: 350px;
    height: 50%;
  }
}
</style>
