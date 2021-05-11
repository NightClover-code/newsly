//importing gql
import { gql } from '@apollo/client';
import { articleDetailFragment } from './fragments';

//graphql queries
export const articleQuery = gql`
  query ArticleQuery {
    articles {
      ...ArticleDetail
    }
  }
  ${articleDetailFragment}
`;
