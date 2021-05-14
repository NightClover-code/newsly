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
import { client } from './_app';
import { articleQuery, getUpdatedArticleMutation } from '../graphql';
//importing utils
import { seoConfigHomepage, findFeaturedArticle } from '../utils';
//props interface
interface HomePageProps {
  featuredArticle: Article;
  articles: Article[];
}

//homepage
const Homepage: React.FC<HomePageProps> = ({ articles, featuredArticle }) => {
  return (
    <>
      <SEO {...seoConfigHomepage} />
      <div className="wrapper">
        <Hero featuredArticle={featuredArticle} />
        <Categories />
        <Articles articles={articles} />
      </div>
      <Newsletter />
    </>
  );
};

//get server side props
export const getServerSideProps: GetServerSideProps = async () => {
  //saving articles
  await client.query({
    query: articleQuery,
  });
  //fetching updated articles
  const {
    data: { updatedArticles },
  } = await client.mutate({
    mutation: getUpdatedArticleMutation,
  });
  //getting featured article
  const featuredArticle = findFeaturedArticle(updatedArticles);
  return {
    props: {
      featuredArticle,
      articles: updatedArticles.filter(
        (article: Article) =>
          article !== featuredArticle &&
          article.urlToImage !== 'Image could not be uploaded' &&
          article.content
      ),
    },
  };
};

export default Homepage;
