//importing components
import ArticlesItem from './ArticlesItem';
//article grid component
const Articles: React.FC = () => {
  return (
    <section className="articles__section">
      <h1>Articles</h1>
      <div className="articles__grid">
        <ArticlesItem />
        <div className="vertical__line"></div>
        <div className="horizental__line"></div>
        <ArticlesItem />
        <div className="vertical__line"></div>
        <div className="horizental__line"></div>
        <ArticlesItem />
        <div className="horizental__line"></div>
        <ArticlesItem />
        <div className="vertical__line"></div>
        <div className="horizental__line"></div>
        <ArticlesItem />
        <div className="vertical__line"></div>
        <div className="horizental__line"></div>
        <ArticlesItem />
        <div className="horizental__line"></div>
        <ArticlesItem />
        <div className="vertical__line"></div>
        <div className="horizental__line"></div>
        <ArticlesItem />
        <div className="vertical__line"></div>
        <div className="horizental__line"></div>
        <ArticlesItem />
      </div>
      <div className="button secondary__button">Show More</div>
    </section>
  );
};

export default Articles;
