//importing types
import { Article } from '../../interfaces';
import { HeroIllustration } from '../Icons';

//props interface
interface HeroProps {
  featuredArticle: Article;
}

//hero
const Hero: React.FC<HeroProps> = ({ featuredArticle }) => {
  const { urlToImage, title } = featuredArticle;
  return (
    <section className="hero__section">
      <div className="text__content">
        <span>Recently Posted</span>
        <h1>{title}</h1>
        <div className="button primary__button">Read Article</div>
      </div>
      <div className="illustration__container">
        <HeroIllustration urlToImage={urlToImage} />
      </div>
    </section>
  );
};

export default Hero;
