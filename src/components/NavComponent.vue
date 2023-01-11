<template>
  <nav>
    <router-link :to="link"
      ><span class="cursor-pointer">{{ title }}</span></router-link
    >
  </nav>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const title = computed(() => {
      return route.path === "/contact" ? "home" : "contact";
    });

    const link = computed(() => {
      return route.path === "/contact" ? "/" : "/contact";
    });

    return {
      link,
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
nav span {
  font-size: 2rem;
  text-transform: capitalize;
}
</style>
