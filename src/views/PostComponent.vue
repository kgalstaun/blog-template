<template>
  <div class="w-full">
    <template v-if="post">
      <div v-if="post.intro" v-html="post.intro.html" class="mt-md"></div>

      <ListComponent v-if="post.list" class="md:mt-md" :list="post.list" />

      <div v-if="post.outro" v-html="post.outro.html" class="mt-lg"></div>
    </template>

    <template v-if="error">
      <Message :type="'error'">{{ getConstant("messages", "error") }}</Message>
    </template>
  </div>
</template>

<script>
import { ref, watch, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import QueryService from "@/service/QueryService";
import PostQuery from "@/queries/post";
import Message from "@/components/MessageComponent";
import ConstantService from "@/service/ConstantService";
import ListComponent from "@/components/ListComponent";

export default {
  components: { Message, ListComponent },
  setup() {
    ListComponent;
    onMounted(() => fetchData());

    const route = useRoute();
    const getConstant = ConstantService.get;
    let post = ref(null);
    let error = ref(false);

    watch(route, () => {
      fetchData();
    });

    const queryParam = computed(() => {
      return route.path === "/contact" ? "contact" : "home";
    });

    async function fetchData() {
      QueryService.fetch(PostQuery, { title: queryParam.value })
        .then((data) => {
          if (data.posts.length > 0) {
            post.value = data.posts[0];
          } else error.value = true;
        })
        .catch(() => (error.value = true));
    }

    return {
      post,
      error,
      getConstant,
    };
  },
};
</script>
