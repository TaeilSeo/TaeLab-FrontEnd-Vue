<template>
  <div class="container container-padding">
    <div class="container-inner">
      <section>
        <h2 class="pt-4 pb-4">관심 종목</h2>
        <ul>
          <li v-for="(stock, index) in stocks" :key="index">
            <b-card :header="stock.symbol" class="mt-4 mb-4">
              <b-card-text>{{ stock.company }}</b-card-text>
            </b-card>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
// import http from "@/api/http.js";

export default {
  data() {
    return {
      stocks: [
        {
          stocktId: 0,
          symbol: "AMZN",
          company: "Amazon.com, Inc.",
          exchange: "NasdaqGS",
          country: "USA",
          currency: "USD",
          sector: "Consumer Cyclical",
        },
        {
          stocktId: 0,
          symbol: "AAPL",
          company: "Apple Inc.",
          exchange: "NasdaqGS",
          country: "USA",
          currency: "USD",
          sector: "Technology",
        },
        {
          stocktId: 0,
          symbol: "SOXL",
          company: "Direxion Daily Semiconductor Bull 3X Shares",
          exchange: "NYSEArca",
          country: "USA",
          currency: "USD",
          sector: "Semiconductor",
        },
        {
          stocktId: 0,
          symbol: "MSFT",
          company: "Microsoft Corporation",
          exchange: "NasdaqGS",
          country: "USA",
          currency: "USD",
          sector: "Technology",
        },
        {
          stocktId: 0,
          symbol: "TSLA",
          company: "Tesla, Inc.",
          exchange: "NasdaqGS",
          country: "USA",
          currency: "USD",
          sector: "Consumer Cyclical",
        },
      ],
    };
  },
  // created() {
  //   http.get("/stock").then(({ data }) => {
  //     this.stocks = data;
  //   });
  // },
};
</script>

<style></style>
