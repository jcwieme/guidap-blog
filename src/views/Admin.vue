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
        <transition name="fade" mode="out-in">
          <ArticlesList
            v-if="!isAddingOrEditing"
            :posts="posts"
            :action="addOrEditFrameHandler"
          />
          <ArticleForm
            v-else
            :action="addOrEditHandler"
            :title="idEditing ? titleToEdit : null"
            :text="idEditing ? textToEdit : null"
            :id="idEditing"
            :actionDelete="deleteHandler"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesList from "@/components/admin/ArticlesList";
import ArticleForm from "@/components/admin/ArticleForm";

import ImageCpt from "@/components/basics/Image";
import Loader from "@/components/basics/Loader";

import types from "@/store/types";

export default {
  name: "Admin",
  components: {
    ImageCpt,
    Loader,
    ArticlesList,
    ArticleForm,
  },
  data() {
    return {
      logoPath: require("@/assets/logo.png"),
      titleToEdit: null,
      textToEdit: null,
    };
  },
  computed: {
    posts: function() {
      return this.$store.state.posts;
    },
    isAddingOrEditing: function() {
      return this.$store.state.isEditing;
    },
    idEditing: function() {
      return this.$store.state.idEditing;
    },
  },
  methods: {
    addOrEditFrameHandler(id) {
      if (id) {
        this.$store.commit(types.SET_ID, id);
        this.titleToEdit = this.$store.state.posts.filter(
          (el) => el.id == this.idEditing
        )[0].title;
        this.textToEdit = this.$store.state.posts.filter(
          (el) => el.id == this.idEditing
        )[0].body;
        this.$store.commit(types.TYPE_INPUT, {
          name: "title",
          input: this.titleToEdit,
        });
        this.$store.commit(types.TYPE_INPUT, {
          name: "text",
          input: this.textToEdit,
        });
      }
      this.$store.commit(types.SET_BOOL, { name: "isEditing", bool: true });
    },
    addOrEditHandler() {
      if (this.idEditing) {
        this.$store.dispatch("editPost", this.idEditing);
        console.log("edited");
      } else {
        this.$store.dispatch("addPost");
        console.log("added");
      }
    },
    deleteHandler(id) {
      console.log(id);
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
}
</style>
