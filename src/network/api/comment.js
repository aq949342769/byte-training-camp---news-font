import { request } from "../request";

// 添加评论
export function addComment(data) {
  return request({
    url: `/v1/comment`,
    data: {
      news_id: data.news_id,
      reply_comment_id: data.reply_comment_id,
      content: data.content,
    },
  });
}

// 查看新闻的评论
export function getCommentsList(id) {
  return request({
    url: `/v1/news/${id}/comments`,
  });
}

// (取消)踩/赞评论评论 
export function postCommentLike(id, likes, method) {
  return request({
    url: `/v1/comment/${id}/likes`,
    method: method, // DELETE/POST
    data: {
      likes: likes //类型：1、赞，2、踩
    }
  })
}
