<template>
  <header>
    <nav>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
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
          name: "Home",
          path: "/",
          desc: "홈 화면으로 이동",
        },
        {
          name: "Stock",
          path: "/stock",
          desc: "주식 화면으로 이동",
        },
        {
          name: "Global",
          path: "/global",
          desc: "글로벌 화면으로 이동",
        },
        {
          name: "Health",
          path: "/health",
          desc: "건강 화면으로 이동",
        },
        {
          name: "Bootstrap",
          path: "/bootstrap",
          desc: "BootStrap 테스트 화면으로 이동",
        },
      ],
    };
  },
};
</script>

<style>
header {
  height: 8vh;
  line-height: 8vh;
  /* background-color: blanchedalmond; */
}

header ul {
  display: flex;
  padding: 0 20px;
}

header li {
  font-size: 24px;
  padding: 0 20px;
}
</style>
