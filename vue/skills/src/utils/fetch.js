import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router'
import Cookie from 'js-cookie'
// import user from './user'
import qs from 'qs'
var CancelToken = axios.CancelToken
var source = CancelToken.source()

// 创建axios实例
const service = axios.create({
  // baseURL: 'http://' + hosts, // api的base_url
  baseURL: '',
  withCredentials: true,
  timeout: 50000               // 请求超时时间
})

// 额外的头会导致axios多发一次 option 请求,这里注释掉
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// request拦截器
service.interceptors.request.use(config => {
  const ticket_ = Cookie.get('ticket')
  if (!ticket_) {
    if (typeof config.requireToken == 'undefined' || config.requireToken === true) {
      config.cancelToken = source.token // 阻止请求
      router.push({path: '/'}) // 人为退出删除ticket 需要重新登入
    }
  }
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => response,
  error => {
    Message({
      message: '登入失败',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

const fetch = (method, url, data = {}, config) => {
  // console.log(router.$store);
  // var getter = router.app.$store.getters;
  var params = router.app.$route.params
  if (params.companyId) {
    data.accessCompanyId = params.companyId
  }
  if (params.activityId) {
    data.accessActivityNo = params.activityId
  }
  if (params.roleType) {
    data.accessRoleType = params.roleType
  }
  config = config || {}
  config.method = method
  config.url = url
  if (method.toLowerCase() === 'get') {
    config['params'] = data
  } else {
    config['data'] = data
  }
  return service(config).then(function (res) {
    var data = res.data
    // 接口500的时候取不到content-type
    if (res.headers && res.headers['content-type']) {
      if (res.headers['content-type'].indexOf('application/json') > -1) {
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data)
          } catch (e) {
            var msg = '请登陆'
            Message.error(msg)
            return Promise.reject({message: msg})
          }
        }
        if (!data.success) {
          return Promise.reject(data)
        }
        return data
      } else {
        return res
      }
    } else {
      var e = {
        message: '抱歉,服务有点异常了~'
      }
      return Promise.reject(e)
    }
  }).catch(function (data) {
    if (data.code === 1005) {
      Cookie.remove('ticket')
      router.push({path: '/'})
      console.log('为登陆');
    } else if(data.code === 1002){
      // 未登录不提示,直接跳转
      
    }else{
      Message({
        message: data.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(data)
  })
}


const get = (url, data, config) => {
  return fetch('get', url, data, config)
}


const post = (url, data, config) => {
  return fetch('post', url, data, config)
}

export {service, fetch, get, post}
