<template>
  <section>
    <h2 class="pt-4 pb-4">글로벌 소식</h2>
    <global-news-list></global-news-list>
  </section>
</template>

<script>
import GlobalNewsList from "@/components/global/GlobalNewsList.vue";

export default {
  name: "GlobalNews",
  components: {
    GlobalNewsList,
  },
};
</script>

<style></style>
