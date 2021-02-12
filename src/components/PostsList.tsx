//importing lodash & random id's
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
//importing hooks
import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
//posts list component
const PostsList = () => {
  //getting actions & state
  const { fetchPosts } = useActions();
  const { loading, error, data } = useTypedSelector(state => state.posts);
  //fetching posts on first render
  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //rendered posts
  const renderedPosts = _.map(data, post => {
    return (
      <div className="item" key={uuidv4()}>
        <div className="content">
          <div className="header">{post.title}</div>
          {post.content}
        </div>
      </div>
    );
  });
  return (
    <div className="list">
      <h3>Posts</h3>
      {loading && (
        <div className="ui active dimmer">
          <div className="ui loader"></div>
        </div>
      )}
      {error && <p className="error">{error}</p>}
      <ul className="ui celled list">{!loading && !error && renderedPosts}</ul>
    </div>
  );
};
export default PostsList;
