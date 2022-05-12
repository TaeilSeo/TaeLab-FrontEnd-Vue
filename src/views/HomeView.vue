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

<style>
main {
  height: 92vh;
  padding: 1vh 2vh;

  background-color: burlywood;
}

section {
  height: 30vh;
  padding: 20px;
}

h1 {
  font-size: 30px;
}
</style>
