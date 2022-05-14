<template>
  <section>
    <div class="container container-padding">
      <div class="container-inner">
        <article>
          <h1 class="pt-2 pb-2">
            더
            <span class="underline-steelblue">똑똑한</span>
            투자자 되기
          </h1>
          <h2 class="pt-5 pb-2">
            <span class="text-primary">VIX</span> 변동성 지수
          </h2>
          <p>
            ‘VIX’로 더 잘 알려진 시카고옵션거래소 변동성지수(Chicago Board
            Options Exchange Volatility Index)는 미국 증시의 기대 변동성
            지표입니다.
          </p>
          <p>
            VIX는 S&P 500 지수의 옵션 가격에 기초하며, 향후 30일간 지수의
            풋옵션1과 콜옵션2 가중 가격을 결합하여 산정합니다.
          </p>
          <p>
            VIX는 향후 미국 주식시장 변동성에 대한 투자자의 견해를 반영하도록
            설계되었습니다. 다시 말해, 향후 30일간 S&P 500지수가 얼마나 변동할
            것으로 투자자들이 생각하는지를 반영합니다.
          </p>
          <p>
            시장의 ‘공포 지수’로 지칭되는 경우가 많은 VIX는 투자자들이 투자
            결정을 내리기 전에 시장 리스크, 공포 및 스트레스를 측정하는 데
            사용합니다.
          </p>
          <h3 class="pt-5 pb-2">VIX는 무엇을 측정하는가?</h3>
          <p>
            옵션 가격이 상승하면 시장 불확실성 및 기대 변동성이 상승한다는
            뜻이므로 VIX가 상승하여, 시장 변동성이 상승할 가능성이 높다는 신호를
            투자자에게 제공합니다.
          </p>
          <h3 class="pt-5 pb-2">VIX의 투자 시사점은 무엇인가?</h3>
          <p>
            VIX가 급등하면 S&P 500 옵션 시장의 트레이더들이 시장 변동성의 상승을
            예상한다는 의미입니다.
          </p>
          <p>
            역발상 투자자들은 VIX 지수가 상승할수록 공포심이 커진 것이므로 매수
            신호라고 간주합니다.
          </p>
          <p>
            반대의 경우도 마찬가지입니다. VIX가 하락할 경우는 공포심이 감소한
            것이므로 시장이 무사 안일주의에 빠져 있다는 뜻으로 볼 수 있습니다.
          </p>
          <div class="float-right">
            출처:
            <a
              href="https://www.fidelity.co.kr/insight-and-learning/learn-about-investing/what-is-volatility/volatility-index"
              target="_blank"
              >VIX변동성 지수에 대하여 투자자가 알아야 할 것들</a
            >
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StockSummary",
  components: {},
};
</script>

<style scoped>
.underline-steelblue {
  display: inline-block;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 70%,
    rgba(240, 244, 6, 0.3) 30%
  );
}

p {
  font-size: 20px;
}
</style>
