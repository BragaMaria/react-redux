import classes from "./User/User.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";


export const Users = (
  {
    followed,
    follow,
    isFollowingProgress,
    unFollow,
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChanged,
    ...props
  }) => {
  return (
    <div>
      <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                 onPageChanged={onPageChanged}/>
      {props.users.map((u) =>

        <div className={classes.userBlock}>
          <div className={classes.userAction}>
            <User key={u.id} user={u} followed={followed} follow={follow}
                  isFollowingProgress={isFollowingProgress} unFollow={unFollow}/>
          </div>
        </div>
      )}
    </div>
  )
}