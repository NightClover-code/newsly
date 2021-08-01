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

export const isMiddleArticle = (
  articles: Article[],
  index: number
): boolean => {
  for (let i = 0; i < articles.length; i++) {
    if (index === 1 + 3 * i) return true;
  }
  return false;
};

export const filterArticles = (featuredArticle: Article, articles: Article[]) =>
  articles.filter(
    (article: Article) =>
      article !== featuredArticle && article.content && article.urlToImage
  );

//exporting everything
export * from './seo';
export * from './data';
