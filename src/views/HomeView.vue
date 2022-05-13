<template>
  <main>
    <stock-summary></stock-summary>
    <global-summary></global-summary>
    <health-summary></health-summary>
  </main>
</template>

<script>
// @ is an alias to /src
import StockSummary from "@/components/StockSummary.vue";
import GlobalSummary from "@/components/GlobalSummary.vue";
import HealthSummary from "@/components/HealthSummary.vue";

export default {
  name: "HomeView",
  components: {
    StockSummary,
    GlobalSummary,
    HealthSummary,
  },
};
</script>

<style scopded>
main {
  /* height: 92vh;
  padding: 1vh 2vh; */
  padding: 20px;

  /* background-color: burlywood; */
}

section {
  /* height: 30vh; */
  margin-bottom: 30px;
  padding: 20px;
}

/* h1 {
  font-size: 30px;
  padding: 10px 0;
}

h2 {
  font-size: 20px;
  padding: 7px 0;
}

p {
  font-size: 18px;
  padding: 5px 0;
} */
</style>
