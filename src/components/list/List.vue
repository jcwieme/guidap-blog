<template>
  <ul class="list">
    <Element
      v-for="el in data.slice(0, 5)"
      :key="el.id"
      :title="el.title"
      :text="el.body"
      :id="el.id"
      :action="action"
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
    action: {
      type: Function,
      default: () => {
        return;
      },
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
