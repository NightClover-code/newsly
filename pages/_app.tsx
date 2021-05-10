//importing layout & styles
import '../styles/css/app.css';
import MainLayout from '../layouts/MainLayout';
//importing gql utils
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';

//apollo client init
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

//app
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
}

export default MyApp;
