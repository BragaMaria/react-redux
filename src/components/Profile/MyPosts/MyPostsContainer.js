import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}


export const MyPostsContainer = connect(mapStateToProps,
  {
    updateNewPostText,
    addPost
  })(MyPosts)
