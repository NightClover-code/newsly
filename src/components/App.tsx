//importing styles
import '../styles/css/app.css';
//importing router & components
import { BrowserRouter, Route } from 'react-router-dom';
import PostsList from './PostsList';
//app component
const App = () => {
  return (
    <div className="app__container">
      <div className="wrapper">
        <BrowserRouter>
          <Route path="/" component={PostsList} exact />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
