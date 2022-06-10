<template>
  <div v-bind:class="[componentTitle, { small: this.size === 'small' }]">
    <h2 v-if="size === 'normal'">{{ title }}</h2>
    <h4 v-if="size === 'small'">{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: "ComponentTitle",
  props: {
    title: {
      type: String,
      default: "Component Title",
    },
    size: {
      type: String,
      default: "normal",
    },
  },
};
</script>

<style scoped>
.componentTitle {
  padding: 1rem 0;
}

.small {
  padding: 0.5rem 0;
}
</style>
