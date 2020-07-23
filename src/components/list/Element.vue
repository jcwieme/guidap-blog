<template>
  <li class="list__el" @click="action(id)">
    <Title :text="title" type="h3" />
    <p>
      {{
        text
          .split(" ")
          .slice(0, 8)
          .join(" ")
          .replace(/[^\w\s]|_/g, "") + "..."
      }}
    </p>
  </li>
</template>

<script>
import Title from "@/components/basics/Title";
export default {
  name: "Element",
  components: {
    Title,
  },
  props: {
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
    action: {
      type: Function,
      default: () => {
        return;
      },
    },
  },
};
</script>

<style></style>
