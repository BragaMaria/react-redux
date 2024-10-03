import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = (props) => {
  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text))
  }


  return (
    <MyPosts newPostText={props.newPostText} updateNewPostText={onPostChange} addPost={addPost} posts={props.posts}/>
  );
}
