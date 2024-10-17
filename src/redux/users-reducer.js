let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = { users:[],currentPage:3, totalUsersCount:0, pageSize:4}



export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:{
      return {
        ...state,
        users: action.users
      }}
    case SET_CURRENT_PAGE:{
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case SET_TOTAL_USERS_COUNT:{
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    }
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

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
})

export const setTotalUsersCountAC = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount
})