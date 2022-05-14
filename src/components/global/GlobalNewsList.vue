<template>
  <ul>
    <global-news-list-item
      v-for="(article, index) in articles"
      :key="index"
      v-bind="article"
    ></global-news-list-item>
  </ul>
</template>

<script>
import GlobalNewsListItem from "@/components/global/item/GlobalNewsListItem.vue";

export default {
  name: "GlobalNewsList",
  components: {
    GlobalNewsListItem,
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {
    this.articles = [
      {
        title: "파월 “연착륙 꽤 어려워…우리가 컨트롤 못하는 요인”",
        content:
          "6~7월 0.5% 포인트 인상 계획 재확인, “상황이 우리 기대보다 더 좋으면 기준금리를 덜 올리고, 상황이 기대보다 더 나쁘면 기준금리를 더 올릴 준비가 돼 있다” 여지",
      },
      {
        title: '원달러 환율 1290원 돌파... "경기침체 우려에 달러 선호↑"',
        content:
          "고물가에 따른 미 연준의 긴축통화정책 기조, 러시아·우크라이나 간 전쟁 장기화, 중국 대도시 봉쇄 조치 등으로 경기 침체가 예상되면서 안전자산인 달러에 자금이 몰린 영향으로 분석, 13년 만에 최고 수준",
      },
      {
        title: '"美물가 하락세 진입 단정 못해…3분기에나 실질적 둔화 확인"-KB',
        content:
          "KB증권은 미국의 4월 소비자물가지수(CPI) 상승률이 한달 전보다는 둔화된 데 대해 폭등세는 일단락됐지만 안정적인 하락세에 진입했다고는 단정할 수 없다고 12일 분석했다.",
      },
    ];
  },
};
</script>

<style></style>
