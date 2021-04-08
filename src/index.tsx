import ReactDOM from 'react-dom';
import App from './components/App';
//importing provider & store
import { Provider } from 'react-redux';
import { store } from './state';
import { BrowserRouter, Route } from 'react-router-dom';
//rendering
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} exact />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
