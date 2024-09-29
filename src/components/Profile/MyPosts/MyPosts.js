import React from 'react';
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



export const MyPosts = (props) => {
  let postsElements = props.data.map(p => <Post text={p.text} count={p.likesCount}/>)
  let newPostElement = React.createRef()
  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.store.dispatch(updateNewPostTextActionCreator(text))
  }


  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea></div>
        <button onClick={addPost}>ADD post</button>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
}
