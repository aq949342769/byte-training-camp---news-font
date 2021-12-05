import { request } from "../request";

export function getNewsCateList() {
  return request({
    url: "/v1/news/channels",
  });
}

export function getLoveNewsCateList() {
  return request({
    url: "/v1/user/channels",
  });
}

export function getRecommendNewsList(count) {
  return request({
    url: `/v1/news/list/recommend?count=${count}`,
  });
}

export function getOrdinaryNewsList(id,count) {
  return request({
    url: `/v1/news/list/channel/${id}?count=${count}`,
  });
}

export function getNewsDetailList(id) {
  return request({
    url: `/api/v1/news/${id}`,
  });
}
