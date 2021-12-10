import axios from "axios";
import { Toast } from "vant";
import { useRouter } from "vue-router";

const router = useRouter();

export function request(config) {
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFubmVsIjpbXSwiZXhwIjoxNjM5NDA3NDg3LCJqdGkiOiIxIiwiaXNzIjoiZGVlcGNvZGUiLCJuYmYiOjE2Mzg4MDE2ODd9.Cx_6x8pNsyWnGBFPksOQUky6dXFS2MIt7Mdqz9Kr3_M"
  );
  const token = localStorage.getItem("token");
  // 1 创建实例
  const instance = axios.create({
    baseURL: "https://dc-news-api.kakkk.net/api",
    // timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  // 设置请求次数，请求的间隙
instance.defaults.retry = 4;
instance.defaults.retryDelay = 1000;

  // 2 拦截器
  // 请求拦截(前端给后端之前进行拦截)
  instance.interceptors.request.use(
    (config) => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });
      return config; //需要返回才能得到请求回来的数据
    },
    (err) => {
      console.log(err);
    }
  );
  // // 响应拦截（后端给前端之前进行拦截）
  instance.interceptors.response.use((res) => {
    Toast.clear();
    return res.data; // 同样需要返回才能得到请求回来的数据
  }),
    (err) => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            Toast.error("请求错误(400)");
            break;
          case 401:
            router.push({ name: "login" });
            break;
          case 403:
            Toast.error("拒绝访问(403)");
            break;
          case 404:
            Toast.error("请求出错(404)");
            break;
          case 408:
            Toast.error("请求超时(408)");
            break;
          case 500:
            Toast.error("服务器错误(500)");
            break;
          case 501:
            Toast.error("服务未实现(501)");
            break;
          case 502:
            Toast.error("网络错误(502)");
            break;
          case 503:
            Toast.error("服务不可用(503)");
            break;
          case 504:
            Toast.error("网络超时(504)");
            break;
          case 505:
            Toast.error("HTTP版本不受支持(505)");
            break;
          default:
            Toast.error(`连接出错(${err.response.status})!`);
        }
      } else {
        Toast.error("连接服务器失败!");
      }
      Toast.clear();
      console.log(err);
    };
  // 3 返回实例·
  return instance(config); //instance本身就是一个pormise
}
