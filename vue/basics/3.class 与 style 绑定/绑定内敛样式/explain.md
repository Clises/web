





v-bind:style 对象语法注意在css 属性名为驼峰式或者短横线分割

```vue
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

data: {
  activeColor: 'red',
  fontSize: 30
}
```




