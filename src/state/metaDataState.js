import { ref, computed } from "vue";

const data = ref({ headerText: null, footerText: null });

function setMetaData(headerText, footerText) {
  data.value.headerText = headerText;
  data.value.footerText = footerText;
}

const getHeaderText = computed(() =>
  data.value ? data.value.headerText : null
);
const getFooterText = computed(() =>
  data.value ? data.value.footerText : null
);

export { setMetaData, getHeaderText, getFooterText };
