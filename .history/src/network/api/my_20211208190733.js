import { request } from "../request";

export function getUserInfo() {
  return request({
    url: "/v1/user/info",
  });
}