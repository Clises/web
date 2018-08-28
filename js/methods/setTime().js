//setTime()以毫秒设置Date对象
//getDate()方法可返回月份的某一天。  以毫秒返回
//1s=1000ms
const time=new Date()
time.setTime(time.getTime());
const t=[]
t.push(time.toLocaleDateString().replace(/\//g,'-'));
