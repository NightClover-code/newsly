//importing types
import { Article } from '../interfaces';

//utils
export const findFeaturedArticle = (articles: Article[]): Article => {
  return articles.find(article => {
    const { urlToImage, title, content } = article;
    if (
      urlToImage &&
      title &&
      content &&
      55 < title.length &&
      title.length < 100
    )
      return article;
  })!;
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

export const isLastIndex = (
  articles: Article[],
  index: number
): number | null => {
  if (index === articles.length - 1) return index;
  return null;
};

export const isResponsiveIndexValid = (
  articles: Article[],
  index: number
): number | null => {
  for (let i = 0; i < articles.length; i++) {
    if (index === 1 + 2 * i) return index;
  }
  return null;
};

export const filterArticles = (featuredArticle: Article, articles: Article[]) =>
  articles.filter(
    (article: Article) =>
      article !== featuredArticle && article.content && article.urlToImage
  );

//exporting everything
export * from './seo';
export * from './data';
