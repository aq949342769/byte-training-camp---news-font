import { request } from "../request";

export function login(username,password) {
  return request({
    url: `/api/v1/login`,
    method: post,
    param: {
      username,
      password
    },
  });
}