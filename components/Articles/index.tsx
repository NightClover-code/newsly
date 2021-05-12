//importing types
import { Article } from '../../interfaces';
//importing components
import ArticlesItem from './ArticlesItem';
//props interface
interface ArticlesProps {
  articles: Article[];
}
//articles grid
const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <section className="articles__section">
      <h1>Articles</h1>
      <div className="articles__grid">
        {articles.map((article, index) => {
          return index === 2 || index === 5 ? (
            <>
              <ArticlesItem article={article} />
              <div className="horizental__line"></div>
            </>
          ) : (
            <>
              <ArticlesItem article={article} />
              <div className="vertical__line"></div>
              <div className="horizental__line"></div>
            </>
          );
        })}
      </div>
      <div className="button secondary__button">Show More</div>
    </section>
  );
};

export default Articles;
