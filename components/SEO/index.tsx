//importing utils
import Head from 'next/head';
//props interface
interface SE0Props {
  title: string;
  description: string;
  keywords?: string;
}

//seo
const SEO: React.FC<SE0Props> = ({ title, description, keywords }) => (
  <Head>
    <title>{title}</title>
    <link rel="shortcut icon" type="images/ico" href="/images/favicon.ico" />
    <meta name="description" content={description} />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    {keywords && <meta name="keywords" content={keywords} />}
    <meta name="author" content="Achraf Dev" />
  </Head>
);

export default SEO;
