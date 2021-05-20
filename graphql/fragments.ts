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
    heroShape
    heroTriangles
    iconArrow
    iconDot
    iconFacebook
    logo
    iconLinkedIn
    iconQuotes
    iconSearch
    iconTwitter
    logoBusiness
    logoFooter
    logoEntertainement
    logoSports
    logoHealth
    logoGeneral
    logoScience
    logoTechnology
  }
`;
