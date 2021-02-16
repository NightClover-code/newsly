//importing styles
import '../styles/css/app.css';
//importing components
import Header from './Header';
import Hero from './Hero';
import Categories from './Categories';
import Articles from './Articles';
import Newsletter from './Newsletter';
import Footer from './Footer';
//app component
const App: React.FC = () => {
  return (
    <div className="app__container">
      <Header />
      <div className="wrapper">
        <Hero />
        <Categories />
        <Articles />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};
export default App;
