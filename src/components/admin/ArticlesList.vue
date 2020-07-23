<template>
  <div class="adminList__panel">
    <div class="adminList__header">
      <Title text="Articles" type="h2" />
      <Button propsClass="button__add" :action="action" />
    </div>
    <div class="adminList__list">
      <List :data="posts" :action="action" />
    </div>
    <div class="adminList__pages">pages num</div>
  </div>
</template>

<script>
import Button from "@/components/form/Button";
import Title from "@/components/basics/Title";
import List from "@/components/list/List";

export default {
  name: "ArticlesList",
  components: {
    Button,
    Title,
    List,
  },
  props: {
    posts: {
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
};
</script>

<style lang="scss">
.adminList {
  &__panel {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 10px 20px 10px;
    border-bottom: 1px solid #ececec;
    height: 15%;

    h2 {
      font-size: 32px;
      height: 32px;
      line-height: 32px;
      vertical-align: middle;
    }
  }

  &__list {
    width: 100%;
    height: 70%;
    // padding: 20px 0px;
  }

  &__pages {
    height: 15%;
    width: 100%;
    text-align: center;
    padding: 20px 0;
  }
}
</style>
