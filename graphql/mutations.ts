//importing gql
import { gql } from '@apollo/client';
import { articleDetailFragment } from './fragments';

//mutations
export const updateArticlesMutation = gql`
  mutation UploadArticlesInput($input: UploadArticlesInput!) {
    newArticles: uploadArticles(input: $input) {
      ...ArticleDetail
    }
  }
  ${articleDetailFragment}
`;
