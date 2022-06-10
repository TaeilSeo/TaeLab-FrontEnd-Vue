<template>
  <li>
    <article v-if="type === 'card'" class="card mt-4 mb-4">
      <div class="card-header font-weight-bold">
        {{ article.title }}
        <span class="text-secondary">{{ article.coldate }}</span>
      </div>
      <div class="card-body">
        <p class="card-text">
          {{ article.content }}
        </p>
      </div>
    </article>
    <article v-if="type === 'simple'" class="h-article-simple mt-3 mb-3">
      <div>
        {{ article.title }}
      </div>
      <div class="text-secondary text-right" style="font-size: 0.75rem">
        {{ article.coldate | changeDateForm }}
      </div>
    </article>
  </li>
</template>

<script>
import moment from "moment";

export default {
  name: "GlobalNewsListItem",
  props: {
    type: {
      type: String,
      default: "card",
    },
    article: Object,
  },
  filters: {
    changeDateForm(date) {
      return moment(date).format("YYYY.MM.DD");
    },
  },
};
</script>
