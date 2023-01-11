<template>
  <p :class="type"><slot></slot></p>
</template>

<script>
export default {
  props: {
    type: String,
  },
};
</script>
