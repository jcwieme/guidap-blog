<template>
  <div class="adminList__panel">
    <div class="adminList__header">
      <Title text="Articles" type="h2" />
      <Button propsClass="button__add" :action="action" />
    </div>
    <div class="adminList__list">
      <List :data="posts" :action="action" />
    </div>
    <div class="adminList__pages">
      <Button
        text="Previous"
        propsClass="button__nav"
        :disabled="currentPage <= 1"
        :action="beforeHandler"
      />
      <p>{{ currentPage }} / {{ pageNumbers }}</p>
      <Button
        text="Next"
        propsClass="button__nav"
        :action="nextHandler"
        :disabled="currentPage >= pageNumbers"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/form/Button'
import Title from '@/components/basics/Title'
import List from '@/components/list/List'

import types from '@/store/types'

export default {
  name: 'ArticlesList',
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
        return
      },
    },
  },
  computed: {
    pageNumbers: function() {
      return Math.ceil(this.posts.length / 5)
    },
    currentPage: function() {
      return this.$store.state.currentPage
    },
  },
  methods: {
    nextHandler() {
      if (this.currentPage < this.pageNumbers) {
        this.$store.commit(types.INC_PAGE)
      }
    },
    beforeHandler() {
      if (this.currentPage > 1) {
        this.$store.commit(types.DEC_PAGE)
      }
    },
  },
}
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

    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    &__panel {
      justify-content: space-evenly;
    }
    &__header {
      padding: 5px 10px;
      height: 10%;

      h2 {
        font-size: 26px;
      }
    }

    &__pages {
      height: 10%;
    }
    &__list {
      height: 75%;
    }
  }
}
</style>
