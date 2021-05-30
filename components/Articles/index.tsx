//importing types & random id's
import { Article } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';
//importing hooks
import { Fragment, useEffect, useState } from 'react';
import ArticlesItem from './ArticlesItem';
import { isIndexValid, isResponsiveIndexValid } from '../../utils';

//props interface
interface ArticlesProps {
  articles: Article[];
}

//articles grid
const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  // local state
  const [width, setwidth] = useState(0);

  //setting dynamic window width
  useEffect(() => {
    window.addEventListener('resize', () => {
      setwidth(window.innerWidth);
    });
  }, []);

  return (
    <section className="articles__section">
      <h1>Articles</h1>
      <div className="articles__grid">
        {articles.map((article, index) => {
          if (isIndexValid(articles, index) && width > 1300) {
            return (
              <Fragment key={uuidv4()}>
                <ArticlesItem article={article} className="item__borders" />
                <div className="horizental__line"></div>
              </Fragment>
            );
          } else if (isResponsiveIndexValid(articles, index) && width <= 1300) {
            return (
              <Fragment key={uuidv4()}>
                <ArticlesItem article={article} className="item__borders" />
                <div className="horizental__line"></div>
              </Fragment>
            );
          } else {
            return (
              <Fragment key={uuidv4()}>
                <ArticlesItem article={article} />
                <div className="horizental__line"></div>
              </Fragment>
            );
          }
        })}
      </div>
      <div className="button secondary__button">Show More</div>
    </section>
  );
};

export default Articles;
