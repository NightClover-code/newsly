//importing components
import { GetServerSideProps } from 'next';
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

//get server side props
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      data: 0,
    },
  };
};
export default Homepage;
