//importing hooks & types
import { useState, useEffect, useRef } from 'react';
import { CloudinaryURLs } from '../../interfaces';
//importing components
import CategoriesGrid from '../CategoriesGrid';
import { ArrowIconLeft, ArrowIconRight } from '../Icons';
import Image from 'next/image';
//importing utils
import { handleResponsiveNum } from '../../utils';

//props interface
interface CategoriesProps {
  images: CloudinaryURLs;
}

//categories
const Categories: React.FC<CategoriesProps> = ({ images: { iconSearch } }) => {
  const gridRef = useRef<HTMLDivElement | null>(null);

  const [counter, setCounter] = useState(0);
  const [responsiveNum, setResponsiveNum] = useState(1);
  const [width, setWidth] = useState<number | null>(null);

  const onArrowRightClickHandler = () => {
    if (counter < responsiveNum) setCounter(counter + 1);
  };

  const onArrowLeftClickHandler = () => {
    if (counter > 0 && counter <= responsiveNum) setCounter(counter - 1);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setCounter(0);
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    handleResponsiveNum(width, setResponsiveNum);
  }, [width]);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.style.transform =
        'translateX(' +
        ((-gridRef.current.scrollWidth + gridRef.current.clientWidth) /
          responsiveNum) *
          counter +
        'px)';
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
          className={`arrow__container__right ${
            counter === responsiveNum ? 'hide__arrow' : ''
          }`}
          onClick={onArrowRightClickHandler}
        >
          <ArrowIconRight />
        </div>
        <div className="categories__grid__container">
          <CategoriesGrid gridRef={gridRef} />
        </div>
        <div
          className={`arrow__container__left ${
            counter === 0 ? 'hide__arrow' : ''
          }`}
          onClick={onArrowLeftClickHandler}
        >
          <ArrowIconLeft />
        </div>
      </div>
    </section>
  );
};

export default Categories;
