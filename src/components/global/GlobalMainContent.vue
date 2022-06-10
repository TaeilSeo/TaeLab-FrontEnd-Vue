<template>
  <section>
    <component-title title="글로벌 메인"></component-title>
    <div class="h-view-items">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <router-link :to="{ name: item.componentName }">{{
            item.tabName
          }}</router-link>
        </li>
      </ul>
    </div>
    <div>
      <p>글로벌 페이지에 오신것을 환영합니다.</p>
      <p>글로벌 뉴스, 키워드 등의 서비스가 제공중입니다.</p>
      <p>즐거운 시간 되세요.</p>
    </div>
  </section>
</template>

<script>
import ComponentTitle from "@/components/layout/ComponentTitle.vue";

export default {
  name: "GlobalMainContent",
  components: {
    ComponentTitle,
  },
  data() {
    return {
      items: [
        {
          componentName: "globalNews",
          tabName: "뉴스",
        },
        {
          componentName: "globalKeyword",
          tabName: "키워드",
        },
      ],
    };
  },
};
</script>

<style scoped>
.h-view-items > ul {
  display: flex;
}

.h-view-items > ul > li {
  padding: 20px;
}
</style>
