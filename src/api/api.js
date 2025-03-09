import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "api-key": "d4df6ad7-120e-4ff4-ad21-9ee8a893656c"
  }
})

export const usersAPI = {
  getUsersRequest(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  unFollowUserRequest(userId) {
    return instance
      .delete(`follow/${userId}`).then(response => response.data)
  },
  followUserRequest(userId) {
    return instance
      .post(`follow/${userId}`, {}).then(response => response.data)
  },
  loginUserRequest() {
    // console.warn('Obsolete method. Please use authAPI object')
    return authAPI.me()
  },
  userProfileRequest(userId) {
    // console.warn('Obsolete method. Please use profileAPI object')
    return profileAPI.userProfileRequest(userId)
  }
}

export const profileAPI = {
  userProfileRequest(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`/profile/status`, {
      status: status
    })
  },
  savePhoto(path) {
    let formData = new FormData()
    formData.append("image",path)
    return instance.put('/profile/photo', formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then(response => response.data)
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
  },
  logout() {
    return instance.delete(`auth/login`).then(response => response.data)
  }
}