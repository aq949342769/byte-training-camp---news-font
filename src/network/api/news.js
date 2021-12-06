import { request } from "../request";

export function getLoveNewsCateList() {
  return request({
    url: "/v1/news/channel/likes",
  });
}

export function getNewsList(channel, count) {
  return request({
    url: `/v1/news/list?channel=${channel}&count=${count}`,
  });
}

export function getNewsDetailList(id) {
  return request({
    url: `/v1/news/${id}`,
  });
}

export function postNewsLikes(channel,method) {
  return request({
    url: `/v1/news/channel/likes`,
    method: method,
    param: {
      channel,
    },
  });
}

