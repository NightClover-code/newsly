//importing gql
import { gql } from '@apollo/client';
import { articleDetailFragment } from './fragments';

export const getUpdatedArticleMutation = gql`
  mutation {
    updatedArticles: getUpdatedArticles {
      ...ArticleDetail
    }
  }
  ${articleDetailFragment}
`;
