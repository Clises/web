import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
//创建组件
import album from '../components/router/album/album';
import article from '../components/router/article/article';
import articleDetails from '../components/router/article/articleDetails';
import albumDetails from '../components/router/album/albumDetails';
import user from '../components/router/user/user';
import userid from '../components/router/user/userid';
import userlist from '../components/router/user/userlist';
//配置路由
const routes = [
  {
    path: '/album',
    component: album,
    name: 'album'
  },
  {
    path: '/article',
    component: article
  },
  {
    path: '/articleDetails/:aid',
    component: articleDetails
  },
  {
    path: '/albumdetails',
    component: albumDetails
  },
  {
    path: '/user',
    component: user,
    //子路由
    children: [
      {path: 'userid', component: userid},
      {path: 'userlist', component: userlist}
    ]
  },
  {path: '*', redirect: '/article'}   /*默认跳转路由*/
]
//出口   实例化
export default new Router({
  routes
})

