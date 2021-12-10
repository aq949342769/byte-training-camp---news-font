import {
  request
} from "../request";
//获取用户信息
export function getUserInfo() {
  return request({
    url: "/v1/user/info",
  });
}
//获取用户设置
export function getUserSetting() {
  return request({
    url: "/v1/user/setting",
  });
}
//修改用户信息
export function updateUserInfo(data) {
  return request({
    method: "PUT",
    url: "/v1/user/info",
    data
  });
}
//修改用户设置
export function updateUserSetting(data) {
  return request({
    method: "PUT",
    url: "/v1/user/setting",
<<<<<<< HEAD
    data: data
=======
    data
  });
}
//上传头像
export function uploadAvatar(data) {
  return request({
    Headers: {
      "Content-Type": "multipart/form-data"
    },
    method: "POST",
    url: "/v1/user/avatar/upload",
    data
>>>>>>> d313812ea9ae82fa291bf7fc1de910f874c045e5
  });
}