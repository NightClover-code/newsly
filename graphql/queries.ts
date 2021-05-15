//importing gql
import { gql } from '@apollo/client';
import { articleDetailFragment } from './fragments';

//graphql queries
export const articlesQuery = gql`
  query ArticlesQuery {
    articles {
      ...ArticleDetail
    }
  }
  ${articleDetailFragment}
`;
