import { request } from "../request";

export function getNewsList() {
  return request({
    url: "/v1/news/channels",
  });
}

export function getLoveNewsList() {
    return request({
      url: "/v1/user/channels",
    });
  }
