<template>
  <main class="w-full flex items-start">
    <transition name="fade" mode="out-in">
      <div
        v-if="getContent && getContent.html"
        name="contentWrapper"
        :key="getContent"
        v-html="getContent.html"
      ></div>
    </transition>
    <ErrorComponent v-if="error"></ErrorComponent>
  </main>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { setContent, getContent } from "@/state/contentState";
import QueryService from "@/service/QueryService";
import DataQuery from "@/queries/data";
import ErrorComponent from "@/components/ErrorComponent";

export default {
  components: { ErrorComponent },
  setup() {
    const route = useRoute();
    const router = useRouter();
    let error = ref(false);

    watch(route, () => {
      setContent(null);
      fetchData();
    });

    onMounted(() => {
      fetchData();
    });

    async function fetchData() {
      const routeParam = route.params.id ? route.params.id : null;
      let queryTitle = routeParam ? routeParam : route.name;

      QueryService.fetch(DataQuery, { title: queryTitle })
        .then((response) => {
          if (response.dataItems.length > 0) {
            setContent(response.dataItems[0]);
            if (error.value) {
              error.value = false;
            }
          } else error.value = true;
        })
        .finally(() => {
          overrideAnchorTags("contentWrapper");
        })
        .catch(() => (error.value = true));
    }

    function overrideAnchorTags(elements) {
      document.getElementsByName(elements).forEach((el) => {
        el.querySelectorAll("a").forEach((anchor) => {
          anchor.addEventListener("click", (event) => {
            event.preventDefault();
            router.push(anchor.attributes.href.value);
          });
        });
      });
    }

    return {
      getContent,
      error,
    };
  },
};
</script>
