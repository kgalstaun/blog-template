import { gql } from "graphql-request";

const MetaQuery = gql`
  query getMeta() {
    metas(first: 1) {
        headerText
        footerText
    }
  }
`;

export default MetaQuery;
