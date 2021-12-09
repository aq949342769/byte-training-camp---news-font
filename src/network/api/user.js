import { request } from "../request";

export function login(username,password,method) {
  return request({
    url: `/v1/login`,
    method: method,
    data: {
      username,
      password
    },
  });
}

export function register(username,email,password,method) {
  return request({
    url: `/v1/register`,
    method: method,
    data: {
      username,
      email,
      password
    },
  });
}

