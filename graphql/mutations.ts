//importing gql
import { gql } from '@apollo/client';
import { articleDetailFragment } from './fragments';

export const saveAndUpdateArticlesMutation = gql`
  mutation {
    articles: saveAndUpdateArticles {
      ...ArticleDetail
    }
  }
  ${articleDetailFragment}
`;
