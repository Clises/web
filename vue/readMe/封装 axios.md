1.接口代理设置
```javascript
proxyTable: {
      '/': {
        target: 'http://localhost:3000',  //本地服务器将请求转发到这个地址
        secure: false, 
        changeOrigin: true  //避免跨域
        pathRewrite: {   
               '/'
            }

      }
    },
```
2. src 文件夹下新建 api和 utils 文件夹,api 下新建 api.js负责统一管理接口,utils 下新建 fetch.js 负责封装 axios

3.在 fetch.js中引入 axios
```javascript
import axios from 'axios'
import Cookie from 'js-cookie' //处理 cookie
import qs from 'qs' // qs模块，用来序列化post类型的数据
import Toast from 'muse-ui-toast'
var CancelToken = axios.CancelToken;
var source = CancelToken.source();    //取消在切换页面发起请求
```

axios 请求设置

```javascript
const service = axios.create({
  baseURL: '',
  withCredentials: true,//允许携带 cookie
  timeout: 5000//请求超时时间
})
```


#请求拦截
在发送请求之前需要进行请求拦截,例如有些用户在请求之后才能访问数据,又或者是在 post 请求下需要有序化提交的数据,需要在发送之前进行一个拦截.

```javascript
service.interceptors.request.use(config => {
  //发送请求之前，要做的业务
  /**
    在每次请求之前,从本地cookie存储中读取token,如果存在说明用户已经登录过
    
  * */
  const ticket = Cookie.get('ticket')  //获取 cookie
  if (!ticket) { //
    if (typeof config.requireToken === 'undefined' || config.requireToken === true) {
      config.cancelToken = source.token // 阻止请求
    }
  }
  if (config.method === 'post') {
      
    //使用对提交从参数对象进行序列化操作,如果没有序列化操作后台拿不到数据    ?   什么是序列化操作
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  Promise.reject(error)
})

```


