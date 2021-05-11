//importing gql
import { gql } from '@apollo/client';

//graphql queries
export const articleQuery = gql`
  query ArticleQuery {
    article {
      description
      author
      title
      urlToImage
      publishedAt
    }
  }
`;
