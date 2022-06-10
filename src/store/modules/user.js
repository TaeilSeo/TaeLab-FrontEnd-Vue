const userStore = {
  namespaced: true,
  state: {
    loginUser: {
      userId: "st9273",
      userName: "서태일",
    },
  },

  getters: {
    getUserId: function (state) {
      return state.loginUser.userId;
    },
  },

  mutations: {},

  actions: {},
};

export default userStore;
