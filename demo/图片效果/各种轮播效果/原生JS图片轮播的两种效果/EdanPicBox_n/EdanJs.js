function PicBoxMove_n(){
	//var oEdanPicBox = document.getElementById("edan_PicBox");
	var oEdanPicUl = document.getElementById("edan_PicUl");	
	var timer=null;
	function edan_move()
	{
		clearInterval(timer);
		timer=setInterval(function(){	
			
		  if((oEdanPicUl.offsetLeft<-300&&oEdanPicUl.offsetLeft>-320)||(oEdanPicUl.offsetLeft<-620&&oEdanPicUl.offsetLeft>-640))
		  {
			  clearInterval(timer);
			  oEdanPicUl.style.left=oEdanPicUl.offsetLeft-10+"px";
		  }
		  else if(oEdanPicUl.offsetLeft<-940)
		  {
			  clearInterval(timer);
			  oEdanPicUl.style.left=0;
		  }
		  else
		  {
			  //clearInterval(timer);
			  oEdanPicUl.style.left=oEdanPicUl.offsetLeft-10+"px";
		  }
			
		},30);	
	}
	setInterval(edan_move,3000);
	edan_move();
}