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
