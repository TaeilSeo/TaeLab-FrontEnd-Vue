<template>
  <div class="t-view-title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "ViewTitle",
  props: {
    title: {
      type: String,
      default: "View Title",
    },
  },
};
</script>

<style>
.t-view-title {
  padding: 2rem 0;

  color: #cdcdcd;
}
</style>
