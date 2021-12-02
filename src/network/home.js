import {
  request
} from './request';


export function getNews(type, page) {
  return request({
    method: 'get', //or post.....
    url: '/home/data',
    params: {
      type,
      page
    }
    //or other options
    //for more info check in http://axios-js.com/zh-cn/docs/index.html#%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE
  })
}