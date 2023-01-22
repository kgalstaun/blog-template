import { request } from "graphql-request";

const QueryService = {
  async fetch(query, param) {
    const data = await request(process.env.VUE_APP_API_ENDPOINT, query, param);
    return data;
  },
};

export default QueryService;
