//importing types & random id's
import { Article } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';
//importing hooks
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
        {articles.map(article => (
          <ArticlesItem key={uuidv4()} article={article} />
        ))}
      </div>
      <div className="button secondary__button">Show More</div>
    </section>
  );
};

export default Articles;
