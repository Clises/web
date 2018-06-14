/*
2016.09.01

@诺大人Edan	于北京

*/
function EdanShades()
{
	var oEdanShades = document.getElementById("Edan_Shades");
	var aEdanShades = oEdanShades.getElementsByClassName("Shades_Window");
	var aEdanA = oEdanShades.getElementsByTagName("a");
	var timer = null;
	
	for(var i=0;i<aEdanShades.length;i++)
	{
		aEdanShades[i].index=i;
		aEdanShades[i].onmouseover=function()
		{
			for(var i=0;i<aEdanShades.length;i++)
			{
				aEdanShades[i].style.width="50px";
				aEdanA[i].style.display="none";	
				//aDiv2[i].style.opacity="1";
			}
			this.style.width="500px";
			aEdanA[this.index].style.display="block";	
				
				
		}	
		aEdanShades[i].onmouseout=function()
		{
			for(var i=0;i<aEdanShades.length;i++)
			{
				aEdanShades[i].style.width="50px";	
			}
			this.style.width="500px";
		}
	}
}// JavaScript Document