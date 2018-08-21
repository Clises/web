import {login} from 'api/api'
import md5 from 'js-md5'
import {Message} from 'element-ui';
import store from '@/store'
import router from '@/router'
import { USER_INFO,LOGOUT } from '@/store/mutation-types'
import Cookie from 'js-cookie'


export default {
  login : (loginForm)=> {
    return login({
      email:loginForm.email,
      password:md5(loginForm.password),
      remember:loginForm.remember   
    }).then((json)=>{
      if(json.success){
        Message.success({message: '登录成功', duration: 2 * 1000})
        return json;
      }else{
        Message.error(json.message);
        return Promise.reject(json);

      }
    }).catch((error)=>{
      return Promise.reject(error);
    });
  },
  remember:()=>{
   
  }
}
