1.设置页面默认跳转路由

(1)在 router 中修改,把默认跳转的组件放到第一个,设置 path:'/'
(2)router 中另外声明,声明格式如下:
```javascript
  {
    path: '*',
     redirect: '/Login'
   },
```
2. $.router.push() 设置页面加载时跳转的路由
 



