<template>
  <li>
    <!-- <article>
      <h3 class="pt-2 pb-2">{{ title }}</h3>
      <p class="text-secondary">{{ content }}</p>
    </article> -->

    <!-- <b-card :header="article.title" class="mt-4 mb-4">
      <b-card-text>{{ article.content }}</b-card-text>
    </b-card> -->

    <article class="card mt-4 mb-4">
      <div class="card-header font-weight-bold">
        {{ title }}
        <span class="text-secondary">{{ regdate }}</span>
      </div>
      <div class="card-body">
        <p class="card-text">
          {{ content }}
        </p>
      </div>
    </article>
  </li>
</template>

<script>
export default {
  name: "GlobalNewsListItem",
  props: {
    title: String,
    content: String,
    regdate: String,
  },
};
</script>
