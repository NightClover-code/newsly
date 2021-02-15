//importing styles
import '../styles/css/app.css';
//importing components
import Header from './Header';
//app component
const App: React.FC = () => {
  return (
    <div className="app__container">
      <div className="wrapper"></div>
      <Header />
    </div>
  );
};
export default App;
