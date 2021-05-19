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
import { articlesQuery, saveAndUpdateArticlesMutation } from '../graphql';
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
  const hour = 3600000;
  // updating articles every hour
  const callback = async () => {
    await client.mutate({
      mutation: saveAndUpdateArticlesMutation,
    });
    setTimeout(callback, hour);
  };
  setTimeout(callback, hour);
  //fetching articles
  const {
    data: { articles },
  } = await client.query({
    query: articlesQuery,
  });
  //getting featured article
  const featuredArticle = findFeaturedArticle(articles);
  return {
    props: {
      featuredArticle,
      articles: articles.filter(
        (article: Article) => article !== featuredArticle && article.content
      ),
    },
  };
};

export default Homepage;
