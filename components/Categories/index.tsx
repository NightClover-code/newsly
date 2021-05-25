//importing hooks & types
import { useState } from 'react';
import { CloudinaryURLs } from '../../interfaces';
//imorting utils
import Image from 'next/image';
//importing components
import CategoriesGrid from '../CategoriesGrid';
import { ArrowIcon } from '../Icons';
//props interface
interface CategoriesProps {
  images: CloudinaryURLs;
}
//categories
const Categories: React.FC<CategoriesProps> = ({ images: { iconSearch } }) => {
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
            <Image src={iconSearch} alt="icon-search" width="27" height="27" />
          </div>
          <div className="vertical__line"></div>
          <p>Show Everything</p>
        </div>
      </div>
      <div className="categories__grid__section">
        <div className="arrow__container" onClick={onArrowRightClickHandler}>
          <ArrowIcon />
        </div>
        <div className="categories__grid__container">
          <CategoriesGrid />
        </div>
      </div>
    </section>
  );
};

export default Categories;
