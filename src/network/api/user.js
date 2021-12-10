import { request } from "../request";

export function login(username,password,method) {
  return request({
    url: `/v1/login`,
    method: method,
    param: {
      username,
      password
    },
  });
}

export function register(username,email,password,method) {
  return request({
    url: `/v1/register`,
    method: method,
    param: {
      username,
      email,
      password
    },
  });
}

export function getUserCollectNewsList() {
  return request({
    url: `/v1/user/news/favorites?page=1&limit=10`,
  });
}

export function getUserLikeNewsList() {
  return request({
    url: `/v1/user/news/likes?page=1&limit=10`,
  });
}