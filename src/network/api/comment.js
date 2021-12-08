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
