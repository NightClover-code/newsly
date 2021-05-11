//importing types
import { Article } from '../interfaces';
//importing components
import { GetServerSideProps } from 'next';
import Articles from '../components/Articles';
import Categories from '../components/Categories';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';
//importing apollo & gql queries
import { articleQuery } from '../graphql/queries';
import { client } from './_app';
//importing utils
import { seoConfigHomepage } from '../utils';
//props interface
interface HomePageProps {
  articles: Article[];
}

//homepage
const Homepage: React.FC<HomePageProps> = ({ articles }) => {
  console.log(articles);
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
  const {
    data: { articles },
  } = await client.query({
    query: articleQuery,
  });
  return {
    props: {
      articles,
    },
  };
};

export default Homepage;
