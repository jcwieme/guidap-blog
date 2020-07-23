<template>
  <div class="admin">
    <div class="admin__container " v-if="posts === null">
      <Loader v-if="posts === null" propsClass="spinner__path--yellow" />
    </div>
    <div class="admin__container" v-else>
      <div class="admin__logo">
        <ImageCpt :src="logoPath" alt="#" />
      </div>
      <div class="admin__view">
        <div class="admin__panel">
          <div class="admin__add">
            <Title text="Articles" type="h2" />
            <Button propsClass="button__add" />
          </div>
          <div class="admin__list">
            <List :data="posts" />
          </div>
          <div class="admin__pages">pages num</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageCpt from "@/components/basics/Image";
import Button from "@/components/form/Button";
import Title from "@/components/basics/Title";
import List from "@/components/list/List";
import Loader from "@/components/basics/Loader";

export default {
  name: "Admin",
  components: {
    ImageCpt,
    Button,
    Title,
    List,
    Loader,
  },
  data() {
    return {
      logoPath: require("@/assets/logo.png"),
      dummy: [
        {
          title: "title",
          text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae dolore vel minima rerum accusamus et vero esse velit porro quod laudantium quam assumenda eveniet, debitis architecto voluptates, dignissimos ut est.",
        },
        {
          title: "title",
          text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae dolore vel minima rerum accusamus et vero esse velit porro quod laudantium quam assumenda eveniet, debitis architecto voluptates, dignissimos ut est.",
        },
        {
          title: "title",
          text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae dolore vel minima rerum accusamus et vero esse velit porro quod laudantium quam assumenda eveniet, debitis architecto voluptates, dignissimos ut est.",
        },
        {
          title: "title",
          text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae dolore vel minima rerum accusamus et vero esse velit porro quod laudantium quam assumenda eveniet, debitis architecto voluptates, dignissimos ut est.",
        },
        {
          title: "title",
          text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae dolore vel minima rerum accusamus et vero esse velit porro quod laudantium quam assumenda eveniet, debitis architecto voluptates, dignissimos ut est.",
        },
      ],
    };
  },
  computed: {
    posts: function() {
      return this.$store.state.posts;
    },
  },
};
</script>

<style lang="scss">
.admin {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fbbe03;

  &__container {
    width: 40%;
    height: 85%;
    background-color: #fff;

    border-radius: 20px;
    box-shadow: 5px 5px 10px #fbbe03;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  &__logo {
    height: 25%;
    width: 80%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px 0;

    img {
      width: auto;
      height: 80%;
    }
  }

  &__view {
    width: 80%;
    height: 75%;
  }

  &__panel {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__add {
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
