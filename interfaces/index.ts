//interfaces
export interface Article {
  __typename: string;
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
