<template>
  <div>
    <component-title :title="title" :size="size"></component-title>
    <div v-if="regShow">
      <router-link :to="{ name: 'globalNewsRegister' }"
        >뉴스 등록하기</router-link
      >
    </div>
    <div>
      <ul>
        <global-news-list-item
          v-for="(article, index) in recentArticles"
          :key="index"
          :article="article"
          :type="type"
        ></global-news-list-item>
      </ul>
    </div>
  </div>
</template>

<script>
import ComponentTitle from "@/components/layout/ComponentTitle.vue";
import GlobalNewsListItem from "@/components/global/item/GlobalNewsListItem.vue";

import { mapState, mapActions } from "vuex";

const globalStore = "globalStore";

export default {
  name: "GlobalNewsList",
  components: {
    ComponentTitle,
    GlobalNewsListItem,
  },
  props: {
    title: {
      type: String,
      default: "글로벌 뉴스 목록",
    },
    regShow: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "card",
    },
    size: {
      type: String,
      default: "normal",
    },
    cnt: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    ...mapState(globalStore, ["recentArticles"]),
  },
  created() {
    const params = {
      cnt: this.cnt,
    };

    this.getRecentArticleList(params);
  },
  methods: {
    ...mapActions(globalStore, ["getRecentArticleList"]),
  },
};
</script>

<style></style>
