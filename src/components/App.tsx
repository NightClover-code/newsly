//importing styles
import '../styles/css/app.css';
//importing components
import Header from './Header';
import Hero from './Hero';
import Categories from './Categories';
import Articles from './Articles';
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
    </div>
  );
};
export default App;
