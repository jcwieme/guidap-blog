<template>
  <ul class="list">
    <Element
      v-for="el in data"
      :key="el.id"
      :title="el.title"
      :text="el.body"
    />
  </ul>
</template>

<script>
import Element from "./Element";

export default {
  name: "List",
  props: {
    data: {
      type: Array,
      default: new Array(),
    },
  },
  components: {
    Element,
  },
};
</script>

<style lang="scss">
.list {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__el {
    border-bottom: 1px solid #ececec;
    height: 20%;

    padding: 20px 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-size: 14px;
    }

    &:hover {
      background-color: #f3f3f365;
    }
  }
}
</style>
