//importing layout & styles
import '../styles/css/app.css';
import MainLayout from '../layouts/MainLayout';
//importing gql utils
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { cloudinaryURLsQuery } from '../graphql';
//importing types
import { GetServerSideProps } from 'next';

//apollo client init
export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SERVER_URL,
  cache: new InMemoryCache(),
});

//app component
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
}

//get server side props
export const getServerSideProps: GetServerSideProps = async () => {
  //fetching cloudinary urls
  const {
    data: { cloudinaryURLs },
  } = await client.query({
    query: cloudinaryURLsQuery,
  });
  return {
    props: {
      cloudinaryURLs,
    },
  };
};

export default MyApp;
