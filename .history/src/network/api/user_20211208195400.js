import { request } from "../request";

export function login([username,password],method) {
  return request({
    url: `/v1/login`,
    method: method,
    param: {
      username,
      password
    },
  });
}