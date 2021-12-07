import axios from "axios";

export function request(config) {
  const token = localStorage.getItem("token");
  // 1 创建实例
  const instance = axios.create({
    baseURL: "https://dc-news-api.kakkk.net/api",
    timeout: 5000,
    headers: { "Content-Type": "application/json", Authorization: token },
  });
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
