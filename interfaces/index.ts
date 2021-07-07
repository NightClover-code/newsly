//importing types
import { setWidthType } from '../types';

//interfaces
export interface Article {
  __typename: string;
  author: string | null;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface CloudinaryURLs {
  avatar: string;
  iconDot: string;
  logo: string;
  iconQuotes: string;
  iconSearch: string;
  logoFooter: string;
  favicon: string;
}

export interface WidthState {
  width: number | null;
  setWidth: setWidthType;
}
