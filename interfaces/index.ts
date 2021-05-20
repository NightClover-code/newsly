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
  heroShape: string;
  heroTriangles: string;
  iconArrow: string;
  iconDot: string;
  iconFacebook: string;
  logo: string;
  iconLinkedIn: string;
  iconQuotes: string;
  iconSearch: string;
  iconTwitter: string;
  logoBusiness: string;
  logoFooter: string;
  logoEntertainement: string;
  logoSports: string;
  logoHealth: string;
  logoGeneral: string;
  logoScience: string;
  logoTechnology: string;
}
