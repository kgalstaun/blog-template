import { gql } from "graphql-request";

const PostQuery = gql`
  query getPost($title: String!) {
    posts(where: { title: $title }, first: 1) {
      id
      title
      intro {
        html
      }
      outro {
        html
      }
      list
    }
  }
`;

export default PostQuery;
