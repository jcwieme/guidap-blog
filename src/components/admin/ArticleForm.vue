<template>
  <div class="adminEdit">
    <div class="adminEdit__header">
      <Title :text="title ? title : 'Nouvel article'" type="h2" />
    </div>
    <div class="adminEdit__body">
      <Input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        propsClass="input__editTitle"
        :input="title"
      />
      <Textarea
        propsClass="textarea--adminEdit"
        id="adminEditText"
        name="text"
        :input="text"
      />
      <div v-if="id" class="adminEdit__btns">
        <Button propsClass="button__login" text="Edit it !" :action="action" />
        <Button
          propsClass="button__login"
          color="red"
          text="Delete it :'("
          :action="actionDelete"
        />
      </div>
      <div v-else>
        <Button propsClass="button__login" text="Let's go !" :action="action" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import Button from "@/components/form/Button";
import Title from "@/components/basics/Title";

export default {
  name: "ArticleForm",
  components: {
    Input,
    Textarea,
    Button,
    Title,
  },
  props: {
    action: {
      type: Function,
      default: () => {
        return;
      },
    },
    actionDelete: {
      type: Function,
      default: () => {
        return;
      },
    },
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.adminEdit {
  height: 100%;
  padding: 0 0 10%;
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 10px 20px 10px;
    border-bottom: 3px solid #2c3e50;
    height: 15%;

    h2 {
      font-size: 32px;
      height: 32px;
      line-height: 32px;
      vertical-align: middle;
    }
  }

  &__body {
    height: 85%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  &__btns {
    display: flex;
    flex-direction: row;

    width: 100%;

    button {
      width: 35%;
      margin-right: 15%;
    }
  }
}
</style>
