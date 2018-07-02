this的

默认绑定:没人绑定  this=》window
隐式绑定:谁调用this指向谁
显示绑定:bind apply  call







bind 返回带有一个明确this指向的函数
apply   call在执行的时候改变this的指向

new绑定优先级是最高的



判断this指向的顺序：  new=>bind=>apply,all=>隐式绑定=>默认绑定








