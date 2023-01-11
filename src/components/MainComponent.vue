<template>
  <main class="w-full flex items-start">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component v-if="show" :is="Component" :key="'a' + $route.path" />
      </transition>
    </router-view>
  </main>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    let show = ref(false);
    onMounted(() => {
      show.value = true;
    });

    return {
      show,
    };
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from {
  opacity: 0;
}
</style>
