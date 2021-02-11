//importing types & api & random id's
import { Dispatch } from 'redux';
import blog from '../../api/blog';
import { ActionType } from '../action-types';
import { FetchPostsAction } from '../actions/fetchPosts';
import { v4 as uuidv4 } from 'uuid';
//api key
const API_KEY = `?key=${uuidv4()}`;
//fetch posts
export const fetchPosts = () => async (
  dispatch: Dispatch<FetchPostsAction>
) => {
  try {
    const response = await blog.get(`posts${API_KEY}`);
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
