import classes from "./User/User.module.css";
import userImg from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


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
              ? <button onClick={() => {
                usersAPI.unFollowUserRequest(u.id).then(data => {
                  if (data.resultCode === 0) {
                    props.unFollow(u.id)
                  }
                })
              }}>UNFOLLOW</button>

              : <button onClick={() => {
                usersAPI.followUserRequest(u.id)
                  .then(data => {
                    if (data.resultCode === 0) {
                      props.followUser(u.id)
                    }
                  })
              }
              }>FOLLOW</button>
            }
          </div>

          <div>
            <div>{u.name}</div>
            <div> {u.status}</div>
          </div>

          <div className={classes.userLocation}>
            <div>{u.city}</div>
            <div>{u.country}</div>
          </div>
        </div>
      )}
    </div>
  )
}