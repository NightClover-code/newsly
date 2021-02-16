//importing components
import ArticlesItem from './ArticlesItem';
//article grid component
const Articles: React.FC = () => {
  return (
    <section className="articles__section">
      <h1>Articles</h1>
      <div className="articles__grid">
        <ArticlesItem />
      </div>
    </section>
  );
};

export default Articles;
