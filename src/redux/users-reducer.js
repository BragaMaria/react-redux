let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';




export const usersReducer = (state = [], action) => {
  debugger
  switch (action.type) {
    case SET_USERS:{
      return {
        ...state,
        users: action.users
      }}
    case FOLLOW:
      console.log("Follow",action.userId)

      return {
        ...state,
        users:state.users.map(u  => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        }),
      }

    case UNFOLLOW:
      console.log("UnFollow",action.userId)
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        }),
      }
    default:
      return state
  }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUserAC = (users) => ({
  type: SET_USERS,
  users
})