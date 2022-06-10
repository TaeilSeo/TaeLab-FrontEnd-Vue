import { selectCategory, selectArticle } from "@/api/global.js";

const globalStore = {
  namespaced: true,
  state: {
    categories: [],
    recentArticles: [],
    currentArticle: null,
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
  },
};

export default globalStore;
