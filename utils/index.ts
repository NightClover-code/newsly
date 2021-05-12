//importing types
import { Article } from '../interfaces';

//function utils
export const findFeaturedArticle = (articles: Article[]) => {
  return articles.map(article => {
    if (article.urlToImage && article.title) {
      return article;
    }
  })[0];
};

export * from './seo';
