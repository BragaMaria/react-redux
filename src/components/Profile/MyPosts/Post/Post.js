import classes from './Post.module.css';

export const Post = (props)=>{
  return(
        <div className={classes.item}>
          <img src='https://forum.service-cm.ru/media/kunena/avatars/users/avatar906.jpg' alt='img'/>
          {props.text}
          <div><span>Like {props.count}</span></div>

        </div>
  );
}


