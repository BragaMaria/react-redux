import React from 'react';
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";


const PostForm = (props)=>{
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <div><Field component='textarea' name='post' placeholder={'Enter your post'}></Field></div>
      <button type='submit'>ADD post</button>
    </form>
  )
}

const PostReduxForm = reduxForm({
  form:'post'
})(PostForm)

export const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post text={p.text} count={p.likesCount} key={p.id}/>)

  const onSubmit = (formData)=>{
    props.addPost(formData.post)
    formData.post = ''
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <PostReduxForm onSubmit={onSubmit}/>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
}


