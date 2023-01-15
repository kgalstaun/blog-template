<template>
  <nav class="flex flex-row">
    <template v-for="title in titles" :key="title">
      <router-link :to="'/' + title" class="cursor-pointer text-3xl">{{
        title
      }}</router-link>
    </template>
  </nav>
</template>

<script>
export default {
  setup() {
    const titles = ["werk"];
    return {
      titles,
    };
  },
};
</script>
