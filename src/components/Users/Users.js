import {User} from "./User/User";
import classes from "./User/User.module.css";

export const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        fullName: 'Misha L.',
        status: 'I like football!',
        location: {country: 'Russia', city: 'Moscow'},
        avaImg: 'https://i.pinimg.com/736x/a9/87/9a/a9879a83d4dc610abd17a3bc0994bbcd.jpg'
      },
      {
        id: 2,
        followed: true,
        fullName: 'Matvei R.',
        status: 'I like volleyball!',
        location: {country: 'Belarus', city: 'Minsk'},
        avaImg: 'https://i.pinimg.com/736x/a9/87/9a/a9879a83d4dc610abd17a3bc0994bbcd.jpg'

      },
      {
        id: 3,
        followed: false,
        fullName: 'Renat K.',
        status: 'I like frizz!',
        location: {country: 'Russia', city: 'Kazan'},
        avaImg: 'https://i.pinimg.com/736x/a9/87/9a/a9879a83d4dc610abd17a3bc0994bbcd.jpg'

      },
    ])
  }


  return (
    <div>
      {props.users.map((u) =>
        // return (
        //
        //     <User id={u.id} followed={u.followed} fullName={u.fullName} status={u.status} avaImg={u.avaImg} country={u.location.country} city={u.location.city} follow={props.follow} unFollow={props.unFollow} key={u.id}/>
        //
        // )

        <div className={classes.userBlock}>
          <div className={classes.userAction}>
            <img src={u.avaImg} alt='Img' className={classes.avaImg}/>
            {u.followed
              ? <button onClick={() => props.followUser(u.id)}>FOLLOW</button>
              : <button onClick={() => props.unFollow(u.id)}>UNFOLLOW</button>
            }
          </div>

          <div>
            <div>{u.fullName}</div>
            <div> {u.status}</div>
          </div>

          <div className={classes.userLocation}>
            <div>{u.city}</div>
            <div>{u.country}</div>
          </div>
        </div>
      )}
    </div>)
}