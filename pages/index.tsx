//importing hooks & types
import { useEffect } from 'react';
import { Article, CloudinaryURLs } from '../interfaces';
//importing components
import { GetServerSideProps } from 'next';
import Articles from '../components/Articles';
import Categories from '../components/Categories';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';
//importing apollo & gql queries
import { client } from './_app';
import { articlesQuery, cloudinaryURLsQuery } from '../graphql';
//importing utils
import { seoConfigHomepage, findFeaturedArticle } from '../utils';
//props interface
interface HomePageProps {
  featuredArticle: Article;
  articles: Article[];
  cloudinaryURLs: CloudinaryURLs;
}

//homepage
const Homepage: React.FC<HomePageProps> = ({
  articles,
  featuredArticle,
  cloudinaryURLs,
}) => {
  return (
    <>
      <SEO {...seoConfigHomepage} />
      <div className="wrapper">
        <Hero featuredArticle={featuredArticle} />
        <Categories images={cloudinaryURLs} />
        <Articles articles={articles} />
      </div>
      <Newsletter images={cloudinaryURLs} />
    </>
  );
};

//get server side props
export const getServerSideProps: GetServerSideProps = async () => {
  //fetching articles
  const {
    data: { articles },
  } = await client.query({
    query: articlesQuery,
  });
  //fetching cloudinary urls
  const {
    data: { cloudinaryURLs },
  } = await client.query({
    query: cloudinaryURLsQuery,
  });
  //getting featured article
  const featuredArticle = findFeaturedArticle(articles);
  return {
    props: {
      featuredArticle,
      articles: articles.filter(
        (article: Article) => article !== featuredArticle && article.content
      ),
      cloudinaryURLs,
    },
  };
};

export default Homepage;
