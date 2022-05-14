<template>
  <section>
    <div class="container container-padding">
      <div class="container-inner">
        <h1 class="pt-2 pb-2">지금 <span class="text-primary">세계</span>는</h1>
        <global-news-list></global-news-list>
      </div>
    </div>
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
  background-color: #f9fafb;
}
</style>
