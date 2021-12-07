import {
  request
} from "../request";

export function getUserInfo() {
  return request({
    url: "/api/v1/user/info",
  });
}
export function getUserSetting() {
  return request({
    url: "/api/v1/user/setting",
  });
}