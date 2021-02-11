//importing types
import { ActionType } from '../action-types';
import { FetchPostsAction, PostsInterface } from '../actions/fetchPosts';
//state interface
interface PostsState {
  loading: boolean;
  error: string | null;
  data: PostsInterface | null;
}
//initial state
const initialState = {
  loading: false,
  error: null,
  data: null,
};
//posts reducer
const postsReducer = (
  state: PostsState = initialState,
  action: FetchPostsAction
) => {
  switch (action.type) {
    case ActionType.FETCH_POSTS:
      return { loading: true, error: null, data: null };
    case ActionType.FETCH_POSTS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.FETCH_POSTS_ERROR:
      return { loading: false, error: action.payload, data: null };
  }
};
export default postsReducer;
