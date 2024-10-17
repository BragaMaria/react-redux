import {User} from "./User/User";
import classes from "./User/User.module.css";
import axios from "axios";
import userImg from '../../assets/images/user.jpg'
import React from "react";

export class Users extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(data => {
        this.props.setUsers(data.data.items)
        this.props.setTotalUsersCount(data.data.totalCount)
      })

  }

  onPageChanged(p){
    this.props.setCurrentPage(p)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
      .then(data => {
        this.props.setUsers(data.data.items)
      })
}

  render = () => {
    let pagesCount =  Math.ceil(this.props.totalUsersCount / this.props.pageSize) ;
    let pages = []
    for(let i=1; i<=pagesCount; i++){
      if (pages.length < 20) {
        pages.push(i);
      }
    }

    return <div>
      <div>
        {pages.map(p=> <span
          className={this.props.currentPage===p && classes.selectedPage}
          onClick={()=>{this.onPageChanged(p)}}>{p}</span>)}
      </div>
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