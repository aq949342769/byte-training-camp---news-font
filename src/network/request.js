import axios from "axios";

export function request(config) {
  localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFubmVsIjpbXSwiZXhwIjoxNjM5NDA3NDg3LCJqdGkiOiIxIiwiaXNzIjoiZGVlcGNvZGUiLCJuYmYiOjE2Mzg4MDE2ODd9.Cx_6x8pNsyWnGBFPksOQUky6dXFS2MIt7Mdqz9Kr3_M')
  const token = localStorage.getItem("token");
  // 1 创建实例
  const instance = axios.create({
    baseURL: "https://dc-news-api.kakkk.net/api",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
  });

  // 设置请求次数，请求的间隙
instance.defaults.retry = 4;
instance.defaults.retryDelay = 1000;

  // 2 拦截器
  // 请求拦截(前端给后端之前进行拦截)
  instance.interceptors.request.use(
    (config) => {
      return config; //需要返回才能得到请求回来的数据
    },
    (err) => {
      console.log(err);
    }
  );
  // // 响应拦截（后端给前端之前进行拦截）
  instance.interceptors.response.use((res) => {
      return res.data; // 同样需要返回才能得到请求回来的数据
    }),
    (err) => {
      console.log(err);
    };
  // 3 返回实例·
  return instance(config); //instance本身就是一个pormise
}