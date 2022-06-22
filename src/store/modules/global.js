import {
  selectCategory,
  selectArticle,
  selectArticleDist,
} from "@/api/global.js";

const globalStore = {
  namespaced: true,
  state: {
    categories: [],
    recentArticles: [],
    currentArticle: null,
    articleDist: null,
    history: [],
  },

  getters: {},

  mutations: {
    SET_CATEGORY_LIST: (state, categories) => {
      categories.forEach((category) => {
        state.categories.push({
          value: category.categoryId,
          text: category.name,
        });
      });
    },

    SET_RECENT_ARTICLE_LIST: (state, recentArticles) => {
      state.recentArticles = recentArticles;
    },

    CLEAR_CATEGORY_LIST: (state) => {
      state.categories = [];
    },

    SET_ARTICLE_DIST: (state, articleDist) => {
      let obj = {};

      articleDist.forEach((dist) => {
        obj[dist.name] = dist.cnt;
      });

      state.articleDist = obj;

      // console.log("dist: ", articleDist);
      // let obj = {
      //   economy: 4,
      //   market: 10,
      // };
      // state.articleDist = obj;
    },

    CLEAR_ARTICLE_DIST: (state) => {
      state.articleDist = null;
    },
  },

  actions: {
    getCategoryList: ({ commit }) => {
      selectCategory(
        ({ data }) => {
          commit("SET_CATEGORY_LIST", data);
        },
        (error) => {
          console.log(error);
        },
      );
    },

    getRecentArticleList: ({ commit }, params) => {
      selectArticle(
        params,
        ({ data }) => {
          commit("SET_RECENT_ARTICLE_LIST", data);
        },
        (error) => {
          console.log(error);
        },
      );
    },

    getArticleDist: ({ commit }) => {
      selectArticleDist(
        ({ data }) => {
          commit("SET_ARTICLE_DIST", data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
  },
};

export default globalStore;
