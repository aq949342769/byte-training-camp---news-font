import { request } from "../request";

export function login(username,password,method) {
  return request({
    url: `/api/v1/login`,
    method: method,
    param: {
      username,
      password
    },
  });
}