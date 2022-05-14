<template>
  <li>
    <article>
      <h3 class="pt-2 pb-2">{{ title }}</h3>
      <p class="text-secondary">{{ content }}</p>
    </article>
  </li>
</template>

<script>
export default {
  name: "GlobalNewsListItem",
  props: {
    title: String,
    content: String,
  },
};
</script>

<style scoped>
li {
  padding: 25px 0;
  border-bottom: 1px lightgray solid;
}
</style>
