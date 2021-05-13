//importing gql
import { gql } from '@apollo/client';
import { articleDetailFragment } from './fragments';

//mutations
export const updateArticlesMutation = gql`
  mutation UpdateArticles($articles: [ArticleInput!]!) {
    newArticles: updateArticles(articles: $articles) {
      ...ArticleDetail
    }
  }
  ${articleDetailFragment}
`;
