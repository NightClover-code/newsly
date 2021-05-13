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
import {
  updateArticlesMutation,
  articleQuery,
  getArticlesInput,
} from '../graphql';
//importing utils
import { seoConfigHomepage, findFeaturedArticle } from '../utils';
//props interface
interface HomePageProps {
  featuredArticle: Article;
  articles: Article[];
  newArticles: Article[];
}

//homepage
const Homepage: React.FC<HomePageProps> = ({
  articles,
  featuredArticle,
  newArticles,
}) => {
  console.log(newArticles);
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
  //fetching articles
  const {
    data: { articles },
  } = await client.query({
    query: articleQuery,
  });
  // const {
  //   data: { newArticles },
  // } = await client.mutate({
  //   mutation: updateArticlesMutation,
  //   variables: {
  //     input: getArticlesInput(
  //       'https://cdn.mos.cms.futurecdn.net/FKPFKFC4ictBCPWWCrWnSC-1200-80.jpg',
  //       articles
  //     ),
  //   },
  // });
  //getting featured article
  const featuredArticle = findFeaturedArticle(articles);
  return {
    props: {
      featuredArticle,
      articles: articles.filter(
        (article: Article) => article !== featuredArticle && article.urlToImage
      ),
      // newArticles,
    },
  };
};

export default Homepage;
