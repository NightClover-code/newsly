//importing types & api & random id's
import { Dispatch } from 'redux';
import blog from '../../api/blog';
import { ActionType } from '../action-types';
import { FetchPostsAction } from '../actions/fetchPosts';
//fetch posts
export const fetchPosts = () => async (
  dispatch: Dispatch<FetchPostsAction>
) => {
  //loading
  dispatch({
    type: ActionType.FETCH_POSTS,
  });
  try {
    const response = await blog.get('posts');
    //dispatching results
    dispatch({
      type: ActionType.FETCH_POSTS_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    //dispatching errors
    dispatch({
      type: ActionType.FETCH_POSTS_ERROR,
      payload: err.message,
    });
  }
};
