//importing hooks
import { useState } from 'react';
//importing components
import CategoriesGrid from './CategoriesGrid';
//categories component
const Categories: React.FC = () => {
  //local state
  const [counter, setCounter] = useState(0);
  //on arrow click handler
  const onArrowRightClickHandler = () => {
    setCounter(counter + 1);
  };
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
      <div className="categories__grid__section">
        <div className="arrow__container" onClick={onArrowRightClickHandler}>
          <div className="arrow">
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.6875 9.06248H20.3902L13.2286 2.24123C12.8536 1.88405 12.8391 1.29061 13.1963 0.915609C13.553 0.541078 14.1464 0.526078 14.5219 0.883265L22.7006 8.67389C23.0545 9.02826 23.25 9.49889 23.25 9.99998C23.25 10.5006 23.0545 10.9717 22.6842 11.3415L14.5214 19.1162C14.34 19.2892 14.1075 19.375 13.875 19.375C13.6275 19.375 13.38 19.2775 13.1958 19.0839C12.8386 18.7089 12.8531 18.1159 13.2281 17.7587L20.4197 10.9375H1.6875C1.17 10.9375 0.75 10.5175 0.75 9.99998C0.75 9.48248 1.17 9.06248 1.6875 9.06248V9.06248Z"
                fill="#FFB34D"
              />
            </svg>
          </div>
        </div>
        <div className="categories__grid__container">
          <CategoriesGrid />
        </div>
      </div>
    </section>
  );
};

export default Categories;
