<template>
  <ul>
    <li
      v-for="(item, index) in list"
      :key="index"
      class="flex flex-col sm:flex-row mb-md"
    >
      <span class="w-full sm:w-1/3 pb-md md:pr-md">{{ item.title }}</span>
      <span class="w-full sm:w-2/3">{{ item.text }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: Array,
  },
};
</script>

<style lang="scss" scoped>
ul li {
  span:first-child {
    font-weight: bold;
  }
}
</style>
