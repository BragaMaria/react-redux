import classes from './User.module.css';
import userImg from '../../../assets/images/user.jpg';
import {NavLink} from "react-router-dom";


const User = ({user, followed, isFollowingProgress, unFollow, follow, ...props}) => {
  return (
    <div className={classes.userFlexColumn}>
      <NavLink to={'/profile/' + user.id}>
        <img src={user.photos.small !== null ? user.photos.small : userImg} alt='Img' className={classes.avaImg}/>
      </NavLink>
      {user.followed
        ? <button
          disabled={isFollowingProgress.some(id => id === user.id)}
          onClick={() => {
            unFollow(user.id)
          }}>UNFOLLOW</button>
        : <button
          disabled={isFollowingProgress.some(id => id === user.id)}
          onClick={() => {
            follow(user.id)
          }}>FOLLOW</button>
      }
      <div>{user.name}</div>
    </div>
  )
}

export default User





