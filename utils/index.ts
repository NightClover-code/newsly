//importing types
import { Article } from '../interfaces';

//utils
export const findFeaturedArticle = (articles: Article[]) => {
  return articles.map(article => {
    const { urlToImage, title } = article;
    if (urlToImage && title) return article;
  })[0]!;
};

//exporting everything
export * from './seo';
