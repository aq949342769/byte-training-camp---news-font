import {
  request
} from './request';


export function getNews(type, page) {
  return request({
    method: 'get',//or post.....
    url: '/home/data',
    params: {
      type,
      page
    }
    //or other options
  })
}