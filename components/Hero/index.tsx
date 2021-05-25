//importing types
import { Article } from '../../interfaces';

//props interface
interface HeroProps {
  featuredArticle: Article;
}

//hero
const Hero: React.FC<HeroProps> = ({ featuredArticle }) => {
  //destructuring
  const { urlToImage, title } = featuredArticle;
  return (
    <section className="hero__section">
      <div className="text__content">
        <span>Recently Posted</span>
        <h1>{title}</h1>
        <div className="button primary__button">Read Article</div>
      </div>
      <div className="illustration__container">
        <svg
          width="633"
          height="679"
          viewBox="0 0 633 679"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M583.75 425.197C555.334 349.42 601.047 256.029 612.991 219.574C620.235 197.462 654.144 142.651 612.991 109.979C586.294 88.7855 467.075 56.337 349.434 68.7468C50.4416 100.287 -69.0072 532.925 39.3052 546.851C147.618 560.777 164.915 504.661 254.283 546.851C343.651 589.04 444.138 597.233 528.565 584.535C612.991 571.837 612.167 500.975 583.75 425.197Z"
            fill="url(#pattern0)"
          />
          <path
            d="M31.6729 164.77L79.965 150.027L89.6196 199.588L31.6729 164.77Z"
            fill="white"
            stroke="#008379"
            strokeWidth="3"
          />
          <path
            d="M542.244 64.6632L542.244 5.33868L596.647 63.1942L542.244 64.6632Z"
            stroke="#FFB34D"
            strokeWidth="3"
          />
          <path
            d="M321.393 675.579L268.497 677.008L333.677 634.493L321.393 675.579Z"
            stroke="#ED455D"
            strokeWidth="3"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0"
                transform="translate(-0.120853) scale(0.00118258 0.00142857)"
              />
            </pattern>
            <image id="image0" height="750" xlinkHref={urlToImage!} />
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
