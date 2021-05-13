//importing hooks
import { useRef, useEffect, useState } from 'react';
//importing utils
import Image from 'next/image';
//importing types
import { Article } from '../../../interfaces';
//props interface
interface ArticlesItemProps {
  article: Article;
}
//articles item
const ArticlesItem: React.FC<ArticlesItemProps> = ({ article }) => {
  //refs
  const itemContentRef = useRef<HTMLDivElement>(null);
  //local state
  const [spans, setSpans] = useState(0);
  //destructuring
  const { description, title, urlToImage, author } = article;

  // useEffect(() => {
  //   const height = itemContentRef.current?.clientHeight;
  //   const spans = Math.ceil(height! / 10);
  //   setSpans(spans);
  // }, []);

  return (
    <div className="articles__item">
      <div className="image__container">
        <Image
          src={urlToImage!}
          alt={title}
          objectFit="cover"
          width="200"
          height="130"
          layout="responsive"
        />
      </div>
      <div className="text__content">
        <h1>{title}</h1>
        <p className="description">{description}</p>
        <div className="news__type">
          <div className="custom__button">Article</div>
        </div>
        <span className="author">{author ? `by ${author}` : 'by Variety'}</span>
      </div>
    </div>
  );
};

export default ArticlesItem;
