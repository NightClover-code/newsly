//importing components
import CategoriesItem from './CategoriesItem';
//categories component
const Categories: React.FC = () => {
  return (
    <section className="categories__section">
      <div className="categories__head">
        <h4>Catgeories</h4>
        <div className="search__bar">
          <div className="search__icon__container">
            <img src="./images/icon-search.svg" alt="icon-search" />
          </div>
          <div className="vertical__line"></div>
          <p>Show Everything</p>
        </div>
      </div>
      <div className="categories__grid__container">
        <div className="categories__grid">
          <CategoriesItem imgSource="logo-business" title="Business" />
          <CategoriesItem
            imgSource="logo-entertainement"
            title="Entertainement"
          />
          <CategoriesItem imgSource="logo-general" title="General" />
          <CategoriesItem imgSource="logo-science" title="Science" />
          <CategoriesItem imgSource="logo-health" title="Health" />
        </div>
      </div>
    </section>
  );
};

export default Categories;
