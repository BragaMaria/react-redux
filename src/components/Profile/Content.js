import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Content = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} getProfile={props.getProfile}/>
      <MyPostsContainer/>
    </div>
  );
};


