function PicBoxMove_e(){
	var oEdanPicBox = document.getElementById("edan_PicBox");
	var oEdanPicUl = document.getElementById("edan_PicUl");	
	setInterval(function(){
		if(oEdanPicUl.offsetLeft<-960)
		{
			oEdanPicUl.style.left=0;
		}
		else
		{
			oEdanPicUl.style.left=oEdanPicUl.offsetLeft-2+"px";
		}	
	},30);
}