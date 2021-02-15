import { combineReducers } from 'redux';
//combining reducers
const reducers = combineReducers({
  dummy: () => 5,
});
export default reducers;
//ensuring that typescript knows the type of our state
export type RootState = ReturnType<typeof reducers>;
