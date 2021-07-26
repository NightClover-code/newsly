//importing layout & styles
import '../styles/css/app.css';
import MainLayout from '../layouts/MainLayout';
//importing gql utils & providers
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';

//apollo client init
export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SERVER_URL,
  cache: new InMemoryCache(),
});

//app component
function MyApp({ Component, pageProps }: AppProps) {
  const { cloudinaryURLs } = pageProps;
  return (
    <ApolloProvider client={client}>
      <MainLayout images={cloudinaryURLs}>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
}

export default MyApp;
