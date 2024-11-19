import classes from "./User/User.module.css";
import userImg from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";


export const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 20) {
      pages.push(i);
    }
  }


  return (
    <div>
      <div>
        {pages.map(p => <span
          className={props.currentPage === p && classes.selectedPage}
          onClick={() => {
            props.onPageChanged(p)
          }}>{p}</span>)}
      </div>
      {props.users.map((u) =>

        <div className={classes.userBlock}>
          <div className={classes.userAction}>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small !== null ? u.photos.small : userImg} alt='Img' className={classes.avaImg}/>
            </NavLink>
            {u.followed
              ? <button
                disabled={props.isFollowingProgress.some(id => id === u.id)}
                onClick={() => {
                  props.unFollow(u.id)
                }}>UNFOLLOW</button>
              : <button
                disabled={props.isFollowingProgress.some(id => id === u.id)}
                onClick={() => {
                  props.follow(u.id)
                }}>FOLLOW</button>
            }
          </div>

          <div>
            <div>{u.name}</div>
            <div> {u.status}</div>
          </div>

          <div className={classes.userLocation}>

          </div>
        </div>
      )}
    </div>
  )
}