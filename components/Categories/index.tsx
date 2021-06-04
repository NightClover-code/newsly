//importing hooks & types
import { useState, useEffect, useRef } from 'react';
import { CloudinaryURLs } from '../../interfaces';
//importing components
import CategoriesGrid from '../CategoriesGrid';
import { ArrowIconLeft, ArrowIconRight } from '../Icons';
import Image from 'next/image';

//props interface
interface CategoriesProps {
  images: CloudinaryURLs;
}

//categories
const Categories: React.FC<CategoriesProps> = ({ images: { iconSearch } }) => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  //local state
  const [counter, setCounter] = useState(0);

  const onArrowRightClickHandler = () => {
    setCounter(counter + 1);
  };

  const gap = 50;
  const distance = 202 + gap;

  const onArrowLeftClickHandler = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.style.transform =
        'translateX(' + -distance * counter + 'px)';
      gridRef.current.style.transition = 'all 0.5s ease-in-out';
    }
  }, [counter]);

  return (
    <section className="categories__section">
      <div className="categories__head">
        <h4>Categories</h4>
        <div className="search__bar">
          <div className="search__icon__container">
            <Image src={iconSearch} alt="icon-search" width="27" height="27" />
          </div>
          <div className="vertical__line"></div>
          <p>Show Everything</p>
        </div>
      </div>
      <div className="categories__grid__section">
        <div
          className="arrow__container__right"
          onClick={onArrowRightClickHandler}
        >
          <ArrowIconRight />
        </div>
        <div className="categories__grid__container">
          <CategoriesGrid gridRef={gridRef} />
        </div>
        <div
          className="arrow__container__left"
          onClick={onArrowLeftClickHandler}
        >
          <ArrowIconLeft />
        </div>
      </div>
    </section>
  );
};

export default Categories;
