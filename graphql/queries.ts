//importing gql
import { gql } from '@apollo/client';
import {
  articleDetailFragment,
  cloudinaryURLsDetailFragment,
} from './fragments';

//graphql queries
export const articlesQuery = gql`
  query ArticlesQuery {
    articles {
      ...ArticleDetail
    }
  }
  ${articleDetailFragment}
`;

export const cloudinaryURLsQuery = gql`
  query CloudinaryURLsQuery {
    cloudinaryURLs {
      ...CloudinaryURLsDetail
    }
  }
  ${cloudinaryURLsDetailFragment}
`;
