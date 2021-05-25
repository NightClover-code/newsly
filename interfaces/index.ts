//interfaces
export interface Article {
  __typename: string;
  author: string | null;
  title: string;
  description: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

export interface CloudinaryURLs {
  avatar: string;
  iconArrow: string;
  iconDot: string;
  logo: string;
  iconQuotes: string;
  iconSearch: string;
  logoFooter: string;
}
