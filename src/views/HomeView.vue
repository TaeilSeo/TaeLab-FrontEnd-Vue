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
  /* background-color: burlywood; */
}

section {
  min-height: 100vh;
  /* margin-bottom: 30px; */
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

.container-padding {
  padding: 120px 0;
}
</style>
