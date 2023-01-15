import { request } from "graphql-request";
import { setQueryState } from "@/state/QueryState";

const QueryService = {
  async fetch(query, param) {
    setQueryState(true);
    const data = await request(process.env.VUE_APP_API_ENDPOINT, query, param);
    setQueryState(false);
    return data;
  },
};

export default QueryService;
