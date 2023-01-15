<template>
  <MessageComponent class="pt-xl text-5xl" :type="'error'">{{
    getConstant("messages", "error")
  }}</MessageComponent>
</template>

<script>
import MessageComponent from "@/components/MessageComponent";
import ConstantService from "@/service/ConstantService";

export default {
  components: {
    MessageComponent,
  },
  setup() {
    const getConstant = ConstantService.get;
    return {
      getConstant,
    };
  },
};
</script>
