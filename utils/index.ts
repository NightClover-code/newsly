//importing types
import { Article } from '../interfaces';

//utils
export const findFeaturedArticle = (articles: Article[]): Article => {
  return articles.map(article => {
    const { urlToImage, title } = article;
    if (urlToImage && title) return article;
  })[0]!;
};

export const isIndexValid = (
  articles: Article[],
  index: number
): number | null => {
  for (let i = 0; i < articles.length; i++) {
    if (index === 2 + 3 * i) return index;
  }
  return null;
};

//exporting everything
export * from './seo';
