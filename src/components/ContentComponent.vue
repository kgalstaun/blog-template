<template>
  <main class="w-full flex items-start">
    <template v-if="data">
      <transition name="fade" mode="out-in">
        <div
          name="contentWrapper"
          v-if="data.content && data.content.html"
          :key="data"
          v-html="data.content.html"
        ></div>
      </transition>
    </template>
    <ErrorComponent v-if="error"></ErrorComponent>
  </main>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import QueryService from "@/service/QueryService";
import DataQuery from "@/queries/data";
import ErrorComponent from "@/components/ErrorComponent";

export default {
  components: { ErrorComponent },
  setup() {
    const route = useRoute();
    const router = useRouter();
    let data = ref(null);
    let error = ref(false);

    watch(route, () => {
      data.value = " ";
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
            data.value = response.dataItems[0];
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
      data,
      error,
    };
  },
};
</script>
