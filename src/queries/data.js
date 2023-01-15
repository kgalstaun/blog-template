import { gql } from "graphql-request";

const DataQuery = gql`
  query getData($title: String!) {
    dataItems(where: { title: $title }, first: 1) {
      id
      content {
        html
      }
    }
  }
`;

export default DataQuery;
