//importing styles
import '../styles/css/app.css';
//importing router & components
import { BrowserRouter, Route } from 'react-router-dom';
import PostsList from './PostsList';
import PostsCreate from './PostCreate';
//app component
const App = () => {
  return (
    <div className="app__container">
      <div className="wrapper">
        <BrowserRouter>
          <div>
            <Route path="/" component={PostsList} exact />
            <Route path="/posts/new" component={PostsCreate} />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
