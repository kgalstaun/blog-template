<template>
  <main class="max-w-screen-md mx-auto px-md">
    <div
      v-if="loaded && !error"
      class="pt-xl min-h-screen flex flex-col items-left"
    >
      <HeaderComponent class="mb-lg">{{ headerText }}</HeaderComponent>
      <NavComponent class="mb-lg" />
      <ContentComponent />
      <FooterComponent class="mt-auto mt-xl mb-lg">{{
        footerText
      }}</FooterComponent>
    </div>
    <ErrorComponent v-if="error"></ErrorComponent>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import QueryService from "@/service/QueryService";
import MetaQuery from "@/queries/meta";
import HeaderComponent from "@/components/HeaderComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import ContentComponent from "@/components/ContentComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ErrorComponent from "@/components/ErrorComponent";
import ConstantService from "@/service/ConstantService";

export default {
  components: {
    HeaderComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    ErrorComponent,
  },
  setup() {
    onMounted(() => {
      fetchData();
    });

    let error = ref(false);
    let loaded = ref(false);
    let headerText = ref(null);
    let footerText = ref(null);
    const getConstant = ConstantService.get;

    async function fetchData() {
      QueryService.fetch(MetaQuery)
        .then((data) => {
          headerText.value = data.metas[0].headerText;
          setPageTitle(headerText.value);
          footerText.value = data.metas[0].footerText;
          loaded.value = true;
        })
        .catch(() => (error.value = true));
    }

    function setPageTitle(title) {
      document.title = title;
    }

    return {
      error,
      loaded,
      headerText,
      footerText,
      getConstant,
    };
  },
};
</script>
