import {dateFormat} from './utils'
//格式化时间戳
function install(Vue){
  //注册
  Vue.filter('dateFormat', function(date,format) {
    return dateFormat(date,format);
  });
}

export default install;
