//importing gql
import { gql } from '@apollo/client';

//fragments
export const articleDetailFragment = gql`
  fragment ArticleDetail on Article {
    author
    title
    description
    urlToImage
    publishedAt
    content
  }
`;
