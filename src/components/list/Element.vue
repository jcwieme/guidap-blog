<template>
  <li class="list__el">
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
  },
};
</script>

<style></style>
