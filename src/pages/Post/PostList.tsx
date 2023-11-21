// PostList.tsx
import { connect } from "react-redux";
import { List as ItemList } from '@mui/material';
import { postStates } from "../../store/reducers/post";
import  PostItem  from "../../components/Post/PostItem";
import { PostData } from './Post';
import { fetchPosts } from "../../store/actions/post";
import React, { useEffect } from 'react'


interface PostListProps {
  loading: boolean;
  posts: PostData[];
  fetchPosts: () => void;
}

const PostList :  React.FC<PostListProps> = ({ loading, posts, fetchPosts })=> {
  const postlist = posts?.map((post,key) => <PostItem key={key} {...post} />);
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  return (
    <>
      {loading && (
        <div className="loader">
          <div className="loader-inner">
            <span>Loading ...</span>
          </div>
        </div>
      )}
      <ItemList>{postlist}</ItemList>
    </>
  );
};

interface reducerPostStates{
  post: postStates
}

const mapStateToProps = (state: reducerPostStates) => ({
  loading: state.post.loading,
  posts: state.post.posts,
});

const mapDispatchToProps = {
  fetchPosts: fetchPosts,
};

const ConnectedPostList = connect(mapStateToProps, mapDispatchToProps)(PostList);
export default ConnectedPostList;
