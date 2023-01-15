import { ref, computed } from "vue";

const queryState = ref({ fetching: false });

function setQueryState(status) {
  queryState.value.fetching = status;
}

const getQueryState = computed(() => queryState.value.fetching);

export { setQueryState, getQueryState };
