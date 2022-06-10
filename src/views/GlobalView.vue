<template>
  <div class="container container-padding">
    <div class="container-inner">
      <main>
        <view-title title="글로벌"></view-title>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import ViewTitle from "@/components/layout/ViewTitle.vue";
// import GlobalNewsList from "@/components/global/GlobalNewsList.vue";
// import http from "@/api/http";

export default {
  name: "GlobalView",
  components: {
    ViewTitle,
    // GlobalNewsList,
  },
  // data() {
  //   return {
  //     articles: [],
  //   };
  // },
  // created() {
  //   http
  //     .get("/news")
  //     .then(({ data }) => {
  //       this.articles = data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
</script>

<style></style>
