import classes from './User.module.css'

export const User = (props) => {
  let follow = () => {
    props.follow(props.id)
  }

  let unfollow = () => {
    props.unFollow(props.id)
  }

}