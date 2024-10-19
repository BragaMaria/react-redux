import classes from "./User/User.module.css";
import userImg from "../../assets/images/user.jpg";

export const Users = (props)=>{

  let pagesCount =  Math.ceil(props.totalUsersCount / props.pageSize) ;
  let pages = []
  for(let i=1; i<=pagesCount; i++){
    if (pages.length < 20) {
      pages.push(i);
    }
  }


  return (
    <div>
      <div>
        {pages.map(p=> <span
          className={props.currentPage===p && classes.selectedPage}
          onClick={()=>{props.onPageChanged(p)}}>{p}</span>)}
      </div>
      {props.users.map((u) =>

        <div className={classes.userBlock}>
          <div className={classes.userAction}>
            <img src={u.photos.small !== null ? u.photos.small : userImg} alt='Img' className={classes.avaImg}/>

            {u.followed
              ? <button onClick={() => props.followUser(u.id)}>FOLLOW</button>
              : <button onClick={() =>props.unFollow(u.id)}>UNFOLLOW</button>
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