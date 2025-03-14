import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Content = (props) => {
  return (
    <div>
      <ProfileInfo  saveProfile={props.saveProfile} owner={props.owner} savePhoto={props.savePhoto} profile={props.profile}
                   updateStatus={props.updateStatus} status={props.status}/>
      <MyPostsContainer/>
    </div>
  );
};


