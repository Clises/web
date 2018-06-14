onmessage=function(e){  
	console.log(e.data)  //没有window对象  
	var total=0;
	for(var i=1;i<=e.data;i++){
		total+=i;
	}
	//alert不能用在js中，因为js中没有window对象
	postMessage(total)  //发送值到主线程
}
