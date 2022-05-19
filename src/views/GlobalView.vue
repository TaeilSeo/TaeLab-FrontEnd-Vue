<template>
  <div class="container container-padding">
    <div class="container-inner">
      <main>
        <h1 class="pt-4 pb-4">글로벌</h1>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
// import GlobalNewsList from "@/components/global/GlobalNewsList.vue";
// import http from "@/api/http";

export default {
  name: "GlobalView",
  // components: {
  //   // GlobalNewsList,
  // },
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
