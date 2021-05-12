//importing types
import { Article } from '../../../interfaces';
//props interface
interface ArticlesItemProps {
  article: Article;
}
//articles item
const ArticlesItem: React.FC<ArticlesItemProps> = ({ article }) => {
  //destructuring
  const { description, title, urlToImage, author } = article;
  return (
    <div className="articles__item">
      <div className="image__container">
        <img src={urlToImage!} alt="random-pic" />
      </div>
      <div className="text__content">
        <h1>{title}</h1>
        <p className="description">{description}</p>
        <div className="news__type">
          <div className="custom__button">Article</div>
        </div>
        <span className="author">{author ? `by ${author}` : 'by Unknown'}</span>
      </div>
    </div>
  );
};

export default ArticlesItem;
