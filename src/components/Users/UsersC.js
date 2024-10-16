import {User} from "./User/User";
import classes from "./User/User.module.css";
import axios from "axios";
import userImg from '../../assets/images/user.jpg'
import React from "react";

export class Users extends React.Component {

  constructor(props) {
    super(props);
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(data => {
        debugger
        this.props.setUsers(data.data.items)
      })
  }

  render = () => {
    return <div>
      {this.props.users.map((u) =>

        <div className={classes.userBlock}>
          <div className={classes.userAction}>
            <img src={u.photos.small !== null ? u.photos.small : userImg} alt='Img' className={classes.avaImg}/>

            {u.followed
              ? <button onClick={() => this.props.followUser(u.id)}>FOLLOW</button>
              : <button onClick={() => this.props.unFollow(u.id)}>UNFOLLOW</button>
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

  }


}