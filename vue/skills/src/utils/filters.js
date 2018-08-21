import {dateFormat} from './utils'

function install(Vue){
  Vue.filter('dateFormat', function(date,format) {
    return dateFormat(date,format);
  });
}

export default install;
