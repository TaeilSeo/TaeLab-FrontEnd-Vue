<template>
  <section>
    <h1 class="pt-2 pb-2">오늘의 글로벌 소식</h1>
    <global-news-list></global-news-list>
  </section>
</template>

<script>
import GlobalNewsList from "@/components/global/GlobalNewsList.vue";

export default {
  name: "GlobalSummary",
  components: {
    GlobalNewsList,
  },
};
</script>

<style scoped>
section {
  /* background-color: coral; */
}
</style>
