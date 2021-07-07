//importing types & random id's
import { Article } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';
//importing hooks
import { Fragment, useContext } from 'react';
import ArticlesItem from './ArticlesItem';
import { isIndexValid, isLastIndex, isResponsiveIndexValid } from '../../utils';
//importing context
import { WindowContext } from '../../context';

//props interface
interface ArticlesProps {
  articles: Article[];
}

//articles grid
const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  const { width } = useContext(WindowContext);

  return (
    <section className="articles__section">
      <h1>Articles</h1>
      <div className="articles__grid">
        {articles.map((article, index) => {
          if (isIndexValid(articles, index) && width! > 1300)
            return (
              <Fragment key={uuidv4()}>
                <ArticlesItem article={article} />
                <div className="horizental__line"></div>
              </Fragment>
            );
          else if (isResponsiveIndexValid(articles, index) && width! <= 1300)
            return (
              <Fragment key={uuidv4()}>
                <ArticlesItem article={article} />
                <div className="horizental__line"></div>
              </Fragment>
            );
          else
            return isLastIndex(articles, index) ? (
              <Fragment key={uuidv4()}>
                <ArticlesItem article={article} />
              </Fragment>
            ) : (
              <Fragment key={uuidv4()}>
                <ArticlesItem article={article} />
                <div className="horizental__line"></div>
                <div className="vertical__line"></div>
              </Fragment>
            );
        })}
      </div>
      <div className="button secondary__button">Show More</div>
    </section>
  );
};

export default Articles;
