//types
import { ActionType } from '../action-types';
//action type
export type FetchPostsAction = FetchPosts | FetchPostsError | FetchPostsSuccess;
//data interface
export interface PostsInterface {
  id: {
    id: number;
    title: string;
    categories: string;
    content: string;
  };
}
//action interfaces
interface FetchPosts {
  type: ActionType.FETCH_POSTS;
}
interface FetchPostsSuccess {
  type: ActionType.FETCH_POSTS_SUCCESS;
  payload: PostsInterface;
}
interface FetchPostsError {
  type: ActionType.FETCH_POSTS_ERROR;
  payload: string;
}
