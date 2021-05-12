//importing types & random id's
import { Article } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';
//importing components
import { Fragment } from 'react';
import ArticlesItem from './ArticlesItem';
//props interface
interface ArticlesProps {
  articles: Article[];
}
//articles grid
const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  console.log(articles);
  return (
    <section className="articles__section">
      <h1>Articles</h1>
      <div className="articles__grid">
        {articles.map((article, index) => {
          return index === 2 || index === 5 || index === 8 ? (
            <Fragment key={uuidv4()}>
              <ArticlesItem article={article} />
              <div className="horizental__line"></div>
            </Fragment>
          ) : (
            <Fragment key={uuidv4()}>
              <ArticlesItem article={article} />
              <div className="vertical__line"></div>
              <div className="horizental__line"></div>
            </Fragment>
          );
        })}
        {/* {articles.map(article => {
          return <ArticlesItem article={article} key={uuidv4()} />;
        })} */}
      </div>
      <div className="button secondary__button">Show More</div>
    </section>
  );
};

export default Articles;
