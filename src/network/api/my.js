import {
  request
} from "../request";
//获取用户信息
export function getUserInfo() {
  return request({
    url: "/v1/user/info",
<<<<<<< HEAD
=======
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
    data: data
  });
}
//修改用户设置
export function updateUserSetting(data) {
  return request({
    method: "PUT",
    url: "/v1/user/setting",
    data: data
>>>>>>> 5fc8343bbf7cedd2a251504ca0cc66db594f21a8
  });
}