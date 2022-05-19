<template>
  <header>
    <nav>
      <div class="container">
        <div class="container-inner">
          <!-- logo가 들어갈 자리. 후에 Home을 대체 -->
          <div class="t-logo">
            <router-link to="/">TaeLab</router-link>
          </div>
          <div></div>
          <div>
            <ul>
              <li v-for="(item, index) in items" :key="index">
                <router-link :to="{ name: item.name }">
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      items: [
        {
          name: "stock",
          path: "/stock",
          desc: "주식 화면으로 이동",
        },
        {
          name: "global",
          path: "/global",
          desc: "글로벌 화면으로 이동",
        },
        // {
        //   name: "health",
        //   path: "/health",
        //   desc: "건강 화면으로 이동",
        // },
        // {
        //   name: "bootstrap",
        //   path: "/bootstrap",
        //   desc: "BootStrap 테스트 화면으로 이동",
        // },
      ],
    };
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 8vh;
  line-height: 8vh;
  border-bottom: 2px lightgray solid;
  background-color: white;

  font-size: 18px;
}

.container-inner {
  display: flex;
  justify-content: space-between;
}

header nav ul {
  display: flex;
  /* padding: 0 20px; */
}

header nav li {
  padding: 0 20px;
}

header nav li > a {
  color: #4e5968 !important;
  font-weight: 500;
  /* padding: 10px; */
}

.t-logo {
  margin-right: 20px;

  font-size: 24px;
  font-weight: bold;
}

.t-logo > a {
  color: black !important;
}
</style>
