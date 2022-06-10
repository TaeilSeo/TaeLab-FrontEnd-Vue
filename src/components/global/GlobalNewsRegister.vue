<template>
  <div>
    <component-title title="글로벌 뉴스 등록"></component-title>
    <b-row>
      <b-col cols="9">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
            id="input-group-1"
            label="제목"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.title"
              placeholder="제목 입력"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="부제:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.subtitle"
              placeholder="부제 입력"
            ></b-form-input>
          </b-form-group>

          <b-row>
            <b-col>
              <b-form-group
                id="input-group-3"
                label="카테고리:"
                label-for="input-3"
              >
                <b-form-select
                  id="input-3"
                  v-model="form.categoryId"
                  :options="categories"
                  required
                ></b-form-select> </b-form-group
            ></b-col>
            <b-col>
              <b-form-group
                id="input-group-4"
                label="지역:"
                label-for="input-4"
              >
                <b-form-select
                  id="input-4"
                  v-model="form.region"
                  :options="region"
                  required
                ></b-form-select> </b-form-group
            ></b-col>
          </b-row>

          <b-form-group
            id="textarea-group-1"
            label="내용:"
            label-for="textarea-1"
          >
            <b-form-textarea
              id="textarea-1"
              v-model="form.content"
              placeholder="내용 입력"
              rows="10"
              max-rows="10"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group id="input-group-6" label="URL:" label-for="input-6">
            <b-form-input
              id="input-6"
              v-model="form.url"
              placeholder="URL 입력"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </b-col>
      <b-col cols="3">
        <doughnut-chart
          title="뉴스 통계"
          size="small"
          :width="250"
          :height="250"
          :styles="chartStyle"
        ></doughnut-chart>
        <global-news-list
          title="최근 등록 뉴스"
          :regShow="false"
          type="simple"
          size="small"
        ></global-news-list>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ComponentTitle from "@/components/layout/ComponentTitle.vue";
import GlobalNewsList from "@/components/global/GlobalNewsList.vue";

import DoughnutChart from "@/components/chart/DoughnutChart.vue";

import { insertArticle } from "@/api/global.js";
import { mapState, mapActions, mapMutations } from "vuex";

const globalStore = "globalStore";
// const userStore = "userStore";

export default {
  name: "GlobalNewsRegister",
  components: {
    ComponentTitle,
    GlobalNewsList,
    DoughnutChart,
  },
  props: {
    type: {
      type: String,
      default: "register",
    },
  },
  data() {
    return {
      region: ["Domestic", "Foreign"],
      form: {
        title: "",
        subtitle: "",
        categoryId: "",
        region: "",
        content: "",
        url: "",
      },
      chartStyle: {
        "margin-bottom": "1.5rem",
      },
    };
  },
  computed: {
    // ...mapState(userStore, ["loginUser"]),
    ...mapState(globalStore, ["categories"]),
  },
  created() {
    this.CLEAR_CATEGORY_LIST();
    this.getCategoryList();
  },
  methods: {
    ...mapActions(globalStore, ["getCategoryList", "getRecentArticleList"]),
    ...mapMutations(globalStore, ["CLEAR_CATEGORY_LIST"]),
    onSubmit(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));
      this.registerArticle();
    },
    onReset(event) {
      event.preventDefault();

      this.form.title = "";
      this.form.subtitle = "";
      this.form.categoryId = "";
      this.form.region = "";
      this.form.content = "";
      this.form.url = "";
    },
    registerArticle() {
      const params = {
        title: this.form.title,
        subtitle: this.form.subtitle,
        categoryId: this.form.categoryId,
        region: this.form.region,
        content: this.form.content,
        url: this.form.url,
        userId: "st9273",
      };

      console.log(params);

      insertArticle(
        params,
        ({ data }) => {
          let msg = "등록 처리 중 문제가 발생햇습니다.";
          if (data === "success") {
            msg = "등록이 완료되었습니다.";
          }
          alert(msg);

          this.getRecentArticleList({ cnt: 5 });
        },
        (error) => {
          console.log(error);
        },
      );
    },
  },
};
</script>
