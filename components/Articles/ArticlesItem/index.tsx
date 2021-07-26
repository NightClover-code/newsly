//importing utils
import Image from 'next/image';
import { useContext, useEffect, useRef, useState } from 'react';
import { WindowContext } from '../../../context';
import { useWindowSize } from '../../../hooks';
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

  const containerRef = useRef<HTMLDivElement | null>(null);
  const requiredHeight = containerRef.current?.clientHeight! + 60;

  const [width] = useWindowSize();
  const [height, setHeight] = useState(requiredHeight);
  const [spans, setSpans] = useState(0);

  useEffect(() => {
    setHeight(requiredHeight);
  }, [width, requiredHeight]);

  useEffect(() => setSpans(Math.ceil(height! / 10)), [height]);

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
