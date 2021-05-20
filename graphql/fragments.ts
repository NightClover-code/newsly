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

export const cloudinaryURLsDetailFragment = gql`
  fragment CloudinaryURLsDetail on CloudinaryURLs {
    avatar
    iconArrow
    iconDot
    logo
    iconQuotes
    iconSearch
    logoFooter
  }
`;
