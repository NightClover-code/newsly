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

export const cloudinaryNotFoundURLs = {
  logoFooter:
    'https://res.cloudinary.com/achraf-dev/image/upload/v1621468256/logo-footer_sjeart.svg',
  logo: 'https://res.cloudinary.com/achraf-dev/image/upload/v1621468255/logo_cz2gqx.svg',
};

//exporting everything
export * from './seo';
