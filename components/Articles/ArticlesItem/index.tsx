//importing hooks
import { useRef } from 'react';
import { useSpans } from '../../../hooks';
//importing types
import { Article } from '../../../interfaces';
//importing components
import { ReadMoreArrowRight } from '../../Icons';
import Image from 'next/image';

//props interface
interface ArticlesItemProps {
  article: Article;
}

//articles item
const ArticlesItem: React.FC<ArticlesItemProps> = ({ article }) => {
  const { description, title, urlToImage, author } = article;

  const containerRef = useRef<HTMLDivElement | null>(null);

  const spans = useSpans(containerRef);

  return (
    <div className="articles__item" style={{ gridRowEnd: `span ${spans}` }}>
      <div className="container" ref={containerRef}>
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
          <span className="author">
            {author ? `by ${author}` : 'by Variety'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticlesItem;
