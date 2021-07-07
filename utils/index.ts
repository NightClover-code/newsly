//importing types
import { Article } from '../interfaces';
import { Dispatch, SetStateAction } from 'react';

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
    (article: Article) => article !== featuredArticle && article.content
  );

export const cloudinaryNotFoundURLs = {
  logoFooter:
    'https://res.cloudinary.com/achraf-dev/image/upload/v1621468256/logo-footer_sjeart.svg',
  logo: 'https://res.cloudinary.com/achraf-dev/image/upload/v1621468255/logo_cz2gqx.svg',
};

export const handleResponsiveNum = (
  width: number | null,
  setResponsiveNum: Dispatch<SetStateAction<number>>
) => {
  if (width) {
    if (width > 970) setResponsiveNum(2);
    else if (670 < width && width < 970) setResponsiveNum(4);
    else if (400 < width && width < 670) setResponsiveNum(5);
    else if (width < 400) setResponsiveNum(6);
  }
};

//exporting everything
export * from './seo';
