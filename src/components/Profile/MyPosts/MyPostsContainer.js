import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

export const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let addPost = () => {
            store.dispatch(addPostActionCreator())
          };

          let onPostChange = (text) => {
            store.dispatch(updateNewPostTextActionCreator(text))
          }
          return (
            <MyPosts newPostText={store.getState().profilePage.newPostText} updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={store.getState().profilePage.posts}/>)
        }
      }

    </StoreContext.Consumer>
  );
}
