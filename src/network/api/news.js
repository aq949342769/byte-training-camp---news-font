import { request } from "../request";

// 喜爱频道
export function getLoveNewsCateList() {
  return request({
    url: "/v1/user/channels",
  });
}

// 新闻首页列表
export function getNewsList(channel, count) {
  return request({
    url: `/v1/news/list?channel=${channel}&count=${count}`,
  });
}

// 新闻详情
export function getNewsDetailList(id) {
  return request({
    url: `/v1/news/${id}`,
  });
}

// 关注频道
export function postNewsCateLikes(channel, method) {
  return request({
    url: `/v1/news/channel/likes`,
    method: method,
    data: {
      channel,
    },
  });
}

// 点赞/取消点赞新闻
export function postNewsLikes(id, method) {
  return request({
    url: `/v1/news/${id}/likes`,
    method: method,
  });
}

// 收藏/取消收藏新闻
export function postNewsCollect(id, method) {
  return request({
    url: `/v1/news/${id}/favourites`,
    method: method,
  });
}
