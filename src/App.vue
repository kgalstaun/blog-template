<template>
  <main class="max-w-screen-md mx-auto px-sm">
    <div
      v-if="loaded && !error"
      class="pt-xl min-h-screen flex flex-col items-center"
    >
      <HeaderComponent class="mb-md">{{ headerText }}</HeaderComponent>
      <NavComponent class="mb-md" />
      <MainComponent class="pt-md" />
      <FooterComponent class="mt-auto pt-lg pb-xl">{{
        footerText
      }}</FooterComponent>
    </div>
    <div v-else>
      <Message class="pt-xl text-7xl" :type="'error'">{{
        getConstant("messages", "error")
      }}</Message>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import QueryService from "@/service/QueryService";
import MetaQuery from "@/queries/meta";
import HeaderComponent from "@/components/HeaderComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import Message from "@/components/MessageComponent";
import ConstantService from "@/service/ConstantService";

export default {
  components: {
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    Message,
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
