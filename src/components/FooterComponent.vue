<template>
  <transition name="fade" mode="out-in">
    <footer v-if="!isFetchingContent"><slot></slot></footer>
  </transition>
</template>

<script>
import { getQueryState } from "@/state/QueryState";

export default {
  setup() {
    const isFetchingContent = getQueryState;
    return {
      isFetchingContent,
    };
  },
};
</script>
