//importing types
import { Article } from '../interfaces';

//variables
export const getArticlesInput = (photo: string, articles: Article[]) => ({
  articles,
  photo,
});
