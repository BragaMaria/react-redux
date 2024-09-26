import classes from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div>
    <div className={classes.pict}>
      <img src="https://html.crumina.net/html-olympus/img/top-header1.webp" alt='img'/>
    </div>

      <div className={classes.descBlock}>
        ava + desc
      </div>
    </div>
  );
};


