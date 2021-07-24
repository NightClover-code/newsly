//importing utils
import Image from 'next/image';
//importing types
import { Article } from '../../../interfaces';
import { ReadMoreArrowRight } from '../../Icons';

//props interface
interface ArticlesItemProps {
  article: Article;
}

//articles item
const ArticlesItem: React.FC<ArticlesItemProps> = ({ article }) => {
  const { description, title, urlToImage, author } = article;

  return (
    <div className="articles__item">
      <div className="image__container">
        {urlToImage && (
          <Image
            src={urlToImage}
            alt={title}
            objectFit="cover"
            width="200"
            height="130"
            layout="responsive"
          />
        )}
      </div>
      <div className="text__content">
        <h1>{title}</h1>
        <p className="description">{description}</p>
        <div className="news__type">
          <div className="custom__button">Article</div>
          <ReadMoreArrowRight />
        </div>
        <span className="author">{author ? `by ${author}` : 'by Variety'}</span>
      </div>
    </div>
  );
};

export default ArticlesItem;
