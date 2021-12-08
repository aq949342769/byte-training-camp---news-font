import {
  request
} from "../request";
//获取用户信息
export function getUserInfo() {
  return request({
    url: "/api/v1/user/info",
  });
}
//获取用户设置
export function getUserSetting() {
  return request({
    url: "/api/v1/user/setting",
  });
}
//修改用户信息
export function updateUserInfo(data) {
  return request({
    method: "PUT",
    url: "/api/v1/user/info",
    data: data
  });
}
//修改用户设置
export function updateUserSetting(data) {
  return request({
    method: "PUT",
    url: "/api/v1/user/setting",
    data: data
  });
}