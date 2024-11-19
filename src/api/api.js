import axios from "axios";

const instance = axios.create({
  withCredentials:true,
  baseURL:"https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "api-key": "d4df6ad7-120e-4ff4-ad21-9ee8a893656c"
  }
})

export const usersAPI = {
  getUsersRequest  (currentPage=1,pageSize=10){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>response.data)
  },
  unFollowUserRequest (userId){
    return instance
      .delete(`follow/${userId}`).then(response=>response.data)
  },
  followUserRequest (userId){
    return instance
      .post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}).then(response=>response.data)
  },
  loginUserRequest (){
    return instance.get(`auth/me`).then(response=>response.data)
  }
}