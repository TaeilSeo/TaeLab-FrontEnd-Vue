<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view />
  </div>
</template>

<script>
import HeaderNav from "@/components/layout/HeaderNav.vue";

export default {
  name: "App",
  components: {
    HeaderNav,
  },
};
</script>

<style>
@import url("https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css");

* {
  padding: 0;
  margin: 0;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  box-sizing: border-box;
  /* font-size: 18px; */
}

a {
  color: black !important;
  text-decoration: none !important;
}

li {
  list-style: none !important;
}

#app {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
