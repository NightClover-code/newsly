import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
//combining reducers
const reducers = combineReducers({
  posts: postsReducer,
});
export default reducers;
//ensuring that typescript knows the type of our state
export type RootState = ReturnType<typeof reducers>;
