//importing components
import Articles from '../components/Articles';
import Categories from '../components/Categories';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';
//importing utils
import { seoConfigHomepage } from '../utils';
//homepage
const Homepage: React.FC = () => {
  return (
    <>
      <SEO {...seoConfigHomepage} />
      <div className="wrapper">
        <Hero />
        <Categories />
        <Articles />
      </div>
      <Newsletter />
    </>
  );
};
export default Homepage;
