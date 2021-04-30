//importing components
import Articles from '../components/Articles';
import Categories from '../components/Categories';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
//homepage
const Homepage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Hero />
        <Categories />
        <Articles />
      </div>
      <Newsletter />
    </>
  );
};
export default Homepage;
